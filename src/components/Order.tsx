// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { ProductCart } from "./ProductCart";
// import { Product } from "../interfaces/interface";
// import { Button } from "@mantine/core";

// export const Order = () => {
//   const { CartState } = useContext(CartContext);

//   const { products } = CartState;

//   const isDisable = () => products?.length === 0;

//   return (
//     <div className="grid grid-cols-4 gap-x-10 gap-y-10 py-10 ">
//       {products?.map((product: Product) => {
//         return (
//           <ProductCart
//             key={product.id}
//             product={product}
//             id={""}
//             imgUrl={""}
//             name={""}
//             price={""}
//             rating={""}
//           />
//         );
//       })}
//       <span>{`Total: $ ${CartState?.total}`}</span>
//       <Button
//         className="mb-1"
//         variant="light"
//         color="orange"
//         radius="xl"
//         size="lg"
//         onClick={() => {}}
//       >
//         Order
//       </Button>
//     </div>
//   );
// };

// // import CartContext from "../context/CartContext";
// // import { useContext } from "react";

// // export default function Order() {
// //   const { orders } = useContext(CartContext);
// //   return (
// //     <div className="container mx-auto bg-white min-h-screen p-12">
// //       <h1 className="text-3xl border-b-2 pb-4">Orders</h1>

// //       {/* Order Card */}
// //       <div>
// //         {orders.map((item, key) => (
// //           <div key={key} className="border-b py-6 w-60">
// //             <h1 className="font-bold text-xl">Order: {key + 1}</h1>
// //             <div className="flex justify-between">
// //               <h1>Total Price:</h1>
// //               <span className="font-semibold">
// //                 $
// //                 {item
// //                   .reduce((amount, item) => item.price + amount, 0)
// //                   .toFixed(2)}
// //               </span>
// //             </div>
// //             <div>
// //               {item.map((item, key) => (
// //                 <div key={key} className="flex justify-between">
// //                   <p>{item.name}:</p>
// //                   <p>${item.price}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
