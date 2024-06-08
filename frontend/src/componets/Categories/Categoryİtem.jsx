import PropTypes from "prop-types";
import "./CategoriesItem.css";
import { Link } from "react-router-dom";
// const apiUrl = import.meta.env.VITE_API_BASE_URL;

const CategoryItem = ({ category }) => {
  return (
      <div className="category-item">
       <Link to={`/categories/${category._id}`} className="category-link">
          <img src={category.img} alt="" className="category-image" />
          <span className="category-title">{category.name}</span>
          </Link>
</div>


      

  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  category: PropTypes.object,
};
