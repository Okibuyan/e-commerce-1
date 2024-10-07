import { ShoppingCart } from "./components/svg/ShoppingCart";

export default function Home() {
  return (
    <div className="">
      <div className="w-full bg-red-200 flex justify-center h-[100px]">
        <div className="container flex justify-between items-center">
          <div className="text-2xl text-red-950 font-extrabold">TOPSHOP</div>
          <div className="flex items-center gap-10">
            <button className="btn btn-outline text-red-950 border-[#FFE4E1] hover:bg-[#FFE4E1] hover:border-[#FFE4E1] hover:text-red-950">
              View All
            </button>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
