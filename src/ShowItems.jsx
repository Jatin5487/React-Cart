import React from "react";
import { FaAngleUp } from "react-icons/fa";

function ShowItems({ arr, handleRemove, handleEdit }) {
  return (
    <>
      {arr.map((obj) => {
        return (
            obj.count > 0 &&
          <div className="card h-[120px] py-4 px-2 sm:px-8 border-1 rounded-lg flex justify-between bg-green-200 shadow-2xl">
            {/* card left */}
            <div className="product  flex gap-2">
              <img src={obj.image} alt="" />
              <div className="detail">
                <p>{obj.name}</p>
                <p>${obj.price}</p>
                <p
                  className="cursor-pointer text-blue-950 hover:text-red-600"
                  onClick={() => handleRemove(obj.id)}
                >
                  remove
                </p>
              </div>
            </div>
            {/* card-right */}
            <div className="actions text-xl flex flex-col justify-center items-center">
              <span>
                <FaAngleUp className="text-green-300 cursor-pointer" 
                onClick={()=>{handleEdit(obj.id, "+")}}
                />
              </span>
              <span>{obj.count}</span>
              <span>
                <FaAngleUp className="rotate-180 text-red-300 cursor-pointer" 
                onClick={()=>{handleEdit(obj.id, "-")}}
                />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ShowItems;
