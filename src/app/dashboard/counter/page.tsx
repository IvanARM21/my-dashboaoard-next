import { Metadata } from "next";
import { CartCounter } from "@/shopping-cart";

export const metadata : Metadata = {
  title: 'Shopping Cart',
  description: 'Un simple contador'
} 

export default function CounterPage() {

  return (
    <div className="flex flex-col item-center justify-center w-full h-full">
      <div className="rounded-xl shadow-2xl w-fit mx-auto p-5 flex flex-col items-center">
        <span>Productos en el carrito</span>
        <CartCounter value={20}/>
      </div>
    </div>
  );
}