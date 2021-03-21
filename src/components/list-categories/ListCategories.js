import Config from "../../config";
import "./ListCategories.css";
import { useSelectedCategory } from "../../AppContext";

const { category_order, category_info } = Config;
const listCategories = category_order;

function ListCategories() {
  const selectedCategoryId = useSelectedCategory();
  return (
    <div className="list-categories">
      {listCategories.map((categoryId) => {
        const category = category_info[categoryId] || {};
        const { name, key } = category;
        return (
          <div
            className={`category ${
              selectedCategoryId === categoryId ? "selected" : ""
            }`}
            key={key}
          >
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ListCategories;
