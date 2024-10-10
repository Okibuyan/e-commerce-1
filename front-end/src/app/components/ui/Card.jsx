import { BACKEND_ENDPOINT } from "@/constants/constant";
import { AddToCard } from "./AddToCart";

export const Card = ({
  product,
  onDelete,
  setSelectedProduct,
  selectedProduct,
  setProducts,
}) => {
  // const { productName, category, price, id } = product;
  //   const handleDeleteClick = () => {
  //     onDelete(id);
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedProduct),
    };
    await fetch(`${BACKEND_ENDPOINT}/product`, options);
    document.getElementById("my_modal_2").close();
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("handle input change ajilalaa", name, value);

    setSelectedProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  // console.log(product);

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <p>Барааны нэр:</p>
        <p>Барааны ангилал:</p>
        <p>Үнэ: </p>
        <div className="card-actions justify-end">
          {/* <DeleteButton onClick={handleDeleteClick} /> */}
          <AddToCard
            selectedProduct={selectedProduct}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
