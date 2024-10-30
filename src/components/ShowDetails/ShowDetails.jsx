import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const ShowDetails = () => {
  const foodDetails = useLoaderData();
  const navigate = useNavigate();
  console.log(foodDetails);
  const {
    strArea,
    strCategory,
    strMeal,
    strMealThumb,
    strInstructions,
    strYoutube,
  } = foodDetails.meals[0];

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="border rounded-xl w-9/12 mx-auto mt-10 p-4">
        <div className="rounded-xl overflow-hidden mb-3 h-[400px]">
          <img
            className="w-full h-full object-cover"
            src={strMealThumb}
            alt={strMeal}
          />
        </div>
        <h3 className="font-bold text-lg">{strMeal}</h3>
        <p className="mt-2 font-semibold text-gray-600">
          Category: {strCategory}
        </p>
        <p className="mb-2 font-semibold text-gray-600">Area: {strArea}</p>
        <p className="font-semibold text-gray-600">
          <span className="text-xl text-black">Making Instruction:</span>{" "}
          {strInstructions}
        </p>
        <a href={strYoutube} target="_blank">
          <button className="btn bg-lime-700 text-white text-lg mt-4 px-8 me-5">
            Tutorial
          </button>
        </a>
        <button
          onClick={handleGoBack}
          className="btn bg-lime-700 text-white text-lg mt-4 px-8"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ShowDetails;
