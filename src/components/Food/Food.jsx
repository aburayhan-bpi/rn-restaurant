import React from "react";
import { useNavigate } from "react-router-dom";

const Food = ({ food }) => {
//   console.log(food);
  const { idMeal, strMeal, strMealThumb } = food;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/food/${idMeal}`);
  };

  return (
    <div className="">
      <div className="rounded-xl p-4 border">
        <div className="rounded-xl overflow-hidden mb-3">
          <img className="w-full h-52 object-cover" src={strMealThumb} alt="" />
        </div>
        <h3 className="font-bold text-lg">{strMeal}</h3>
        <button
          className="btn bg-lime-700 hover:bg-lime-600 text-white text-lg mt-3"
          onClick={handleShowDetails}
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default Food;
