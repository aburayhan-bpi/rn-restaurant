import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";

const FoodByCategory = () => {
  const catgFood = useLoaderData();

  //   const [food, setFood] = useState([]);

  //   catgFood.meals[0].map((food) => setFood(food));

  //   console.log(catgFood.meals);

  return (
    <div className="w-10/12 mx-auto">
      <h3 className="font-semibold text-lg my-4">
        Dishes Available: {catgFood.meals.length}
      </h3>
      <div className="grid gap-5 border p-4 rounded-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {catgFood.meals.map((food) => (
          <Food key={food.idMeal} food={food}></Food>
        ))}
      </div>
    </div>
  );
};

export default FoodByCategory;
