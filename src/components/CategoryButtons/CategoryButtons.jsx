import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryButtons = ({ category }) => {
  const navigate = useNavigate();

  const { idCategory, strCategory } = category;
//   console.log(category);

  const handleFoodByCategory = () => {
    navigate(`/ctgfood/${strCategory}`);
  };

  return (
    <div>
      <button
        onClick={handleFoodByCategory}
        className="btn bg-lime-200 text-base"
      >
        {strCategory}
      </button>
    </div>
  );
};

export default CategoryButtons;
