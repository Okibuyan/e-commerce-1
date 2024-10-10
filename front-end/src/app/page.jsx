"use client";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { ShoppingCart } from "./components/svg/ShoppingCart";
import { Card } from "./components/ui/Card";

export default function Home() {
  // const [products, setProducts] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState({});

  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch(`${BACKEND_ENDPOINT}/products`);
  //     const responseData = await response.json();

  //     setProducts(responseData?.products || []);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   console.log(id);

  //   try {
  //     const options = {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({ id: id }),
  //     };
  //     const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
  //     const data = await response.json();
  //     setProducts((prevProducts) =>
  //       prevProducts.filter((product) => data?.product[0]?.id !== product?.id)
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //     // Optionally show some error feedback to the user
  //   }
  // };

  // const handleSelectedProduct = (product) => {
  //   setSelectedProduct(product);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  return (
    <div className="">
      <div className="w-full bg-red-200 flex justify-center h-[100px]">
        <div className="container flex justify-between items-center">
          <div className="text-2xl text-red-950 font-extrabold">TOPSHOP</div>
          <div className="flex items-center gap-10">
            <button className="btn btn-outline text-red-950 border-[#FFE4E1] hover:bg-[#FFE4E1] hover:border-[#FFE4E1] hover:text-red-950">
              View All
            </button>
            <button className="btn btn-outline text-red-950 border-[#FFE4E1] hover:bg-[#FFE4E1] hover:border-[#FFE4E1] hover:text-red-950">
              Add a new product
            </button>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <ShoppingCart />
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Items in your cart</h3>
                <div className="py-4">
                  <p>Quantities</p>
                </div>{" "}
                <div className="flex justify-center">
                  <button className="btn">Proceed to checkout</button>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="container p-8 flex flex-col gap-5">
          {/* <div className="flex justify-end">
            <CreateModal setProducts={setProducts} />
          </div> */}
          <div className="grid grid-cols-3 gap-6">
            {/* {products?.map((product) => {
              return ( */}
            {/* <div key={product?.id}> */}
            <Card
            // setProducts={setProducts}
            //   product={product}
            //   selectedProduct={selectedProduct}
            //   setSelectedProduct={setSelectedProduct}
            //   key={product?.id}
            />
            {/* </div> */}
            {/* ); */}
            {/* })} */}
          </div>
        </div>
      </div>
    </div>
  );
}
