import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryButtons from "../CategoryButtons/CategoryButtons";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  // const categoriess = categories.categories
  console.log(categories.categories);
  return (
    <div className="">
      <h3 className="text-left font-bold mb-5">Sort By Category:</h3>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <CategoryButtons category={category}></CategoryButtons>
        ))}
      </div>
    </div>
  );
};

export default Categories;
