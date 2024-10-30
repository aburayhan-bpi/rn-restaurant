import React from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";
import Categories from "../Categories/Categories";

const Foods = () => {
  const foods = useLoaderData();
  const foodss = foods?.meals;
  console.log(foods);

  return (
    <div className="w-10/12 mx-auto">
      <div className="flex justify-center mt-10 ">
        <Categories></Categories>
      </div>
      <h3 className="font-semibold text-lg my-4">
        Dishes Available: {foodss.length}
      </h3>
      <div className="grid gap-5 border p-6 rounded-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foodss.map((food) => (
          <Food key={food.idMeal} food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
