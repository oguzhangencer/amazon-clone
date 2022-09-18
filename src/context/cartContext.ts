import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  imgUrl: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, "quantity">): void;
  removeFromCart(item: Omit<Product, "quantity">): void;
}

const CartContext = createContext<CartContext | null>(null)

const CartProvider: React.FC = ({children}) => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storageProducts = await AsyncStorage.getItem(
        "@SimpleStore:products",
      )

      if (storageProducts) {
        storageProducts([...JSON.parse(storageProducts)])
      }
    }

    loadProducts()
  }, [])

  const addToCart = useCallback(
    async product => {
      const productExist = products.find(p => p.id === product.id)

      if (productExist) {
        setProducts(
          products.map(p =>
            p.id === product.id ? {...product, quantity: p.quantity + 1} : p,
          ),
        ),
      } else {
        setProducts([...products, {...product, quantity: 1}])
      }

      await AsyncStorage.setItem(
        "@SimpleStore:products",
        JSON.stringify(products),
      )
    },
    [products],
  )

  const removeFromCart = useCallback(
    async product => {
      const productExists = products.find(p => p.id === product.id)

      if (productExists && productExists.quantity >= 2) {
        setProducts(
          products.map(p =>
            p.id === product.id ? {...product, quantity: p.quantity -1} : p,
          ),
        ),
      } else {
        setProducts(products.filter(p => p.id !== product.id))
      }

      await AsyncStorage.setItem(
        "@SimpleStore:products",
        JSON.stringify(products),
      ),
    },
    [products],
  )

  const value = React.useMemo(() => ({addToCart, removeFromCart, products}), [
    products,
    addToCart,
    removeFromCart,
  ])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart(): CartContext{
  const context = useContext(CartContext)

  if (!context){
    throw new Error("useCart must be used within a CartProvider")
  }

  return context
}

export {CartProvider, useCart}
  )
}