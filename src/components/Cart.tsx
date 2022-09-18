import CartContext from "../context/CartContext";
import { IconStar } from "@tabler/icons";
import { Card, Image, Text, Badge, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function Cart() {
  const { cartItems, deleteCart, addOrder, emptyCart } =
    useContext(CartContext);
  let navigate = useNavigate();

  const handleOrder = async () => {
    await addOrder(cartItems);
    await emptyCart();
    navigate("/order");
  };

  return (
    <div className="grid grid-cols-4 gap-x-10 gap-y-10 py-10 ">
      <div className="p-5 border-b ">
        <Text className="font-bold text-2xl">Your Shopping Cart</Text>
        <Text className="text-xl my-2">
          Total: $
          {cartItems.length > 0
            ? Number(
                cartItems.reduce((amount, item) => item.price + amount, 0)
              ).toFixed(2)
            : "0"}
        </Text>
        <Button
          className="mb-1"
          variant="light"
          color="orange"
          radius="xl"
          size="lg"
          onClick={handleOrder}
          disabled={!cartItems.length > 0}
        >
          Order
        </Button>
      </div>
      {cartItems?.map((cart, key) => (
        <div key={key} className="flex items-center">
          <Card
            className="drop-shadow-md flex flex-col items-center justify-center"
            p="lg"
            radius="md"
            withBorder
          >
            <Card.Section>
              <Image src={cart.imgUrl} height="auto" />
            </Card.Section>

            <div className="mt-auto flex flex-col gap-y-2">
              <Text className="text-lg" weight={500}>
                {cart.name}
              </Text>
              <Badge color="pink" variant="light">
                Include Stock
              </Badge>

              <div className="flex items-center justify-between">
                <Text className="text-black text-2xl font-mono">
                  ${cart.price}
                </Text>
                <div className="flex items-center justify-center space-x-1">
                  <IconStar />
                  <Text className="">{cart.rating}</Text>
                </div>
              </div>

              <Button
                onClick={() => deleteCart(cart.id)}
                className="mb-1"
                variant="light"
                color="orange"
                radius="xl"
                size="lg"
              >
                Delete
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
