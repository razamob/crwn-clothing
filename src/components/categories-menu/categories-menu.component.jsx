import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./categories-menu.styles.scss";

const CategoriesMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoriesMenu;
