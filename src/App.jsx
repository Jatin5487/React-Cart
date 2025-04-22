import React, { useEffect, useState } from "react";
import data from "./data";
import ShowItems from "./ShowItems";
import { FaCartPlus } from "react-icons/fa";

function App() {
  const [cart, setCart] = useState([...data]);

  //
  function findCount() {
    return cart.reduce((acc, curr) => acc + Number(curr.count), 0);
  }

  //
  function handleRemove(objId) {
    let copy = [...cart];
    setCart(
      copy.filter((obj) => {
        return obj.id !== objId;
      })
    );
  }

  //
  function handleEdit(objId, sign) {
    let copy = [...cart];
    setCart(
      copy.map((obj) => {
        return objId == obj.id
          ? {
              ...obj,
              count:
                sign == "+" ? Number(obj.count) + 1 : Number(obj.count) - 1,
            }
          : obj;
      })
    );
  }
  //
  function findTotal() {
    return cart.reduce(
      (acc, curr) => acc + Number(curr.count) * Number(curr.price),
      0
    );
  }

  return (
    <>
      {/* header */}
      <div className="header h-18 px-12  bg-gray-500 text-white flex justify-between items-center">
        <h1 className="text-4xl font-bold">Cart-Page</h1>
        <p className="relative inline-block  py-0.5">
          <FaCartPlus className="text-2xl"/>
          {/* Cart item count */}
          <span className="absolute -top-4 -right-5 w-[1.5rem] h-[1.5rem] rounded-[50%] bg-gray-300 flex justify-center items-center">
            {findCount()}
          </span>
        </p>
      </div>

      {/* bag section */}
      <div className="cart-items py-12  px-2 sm:px-8 flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-center">YOUR BAG</h1>

        <ShowItems
          arr={cart}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
        {/* total price */}
        <p className="flex justify-center items-center gap-8 ">
          <span className="text-xl font-semibold">Total Price</span>{" "}
          <span className="bg-purple-500 text-white px-4 py-2.5 rounded-md">
            $ {findTotal()}
          </span>
        </p>

        {/* remove all */}
        <button
          className="w-[150px] h-[3rem] justify-center items-center text-white rounded-md bg-red-500 hover:bg-red-600 m-auto"
          onClick={() => setCart([])}
        >
          Remove All
        </button>
      </div>
    </>
  );
}

export default App;
