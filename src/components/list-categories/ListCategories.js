import Config from "../../config";
import "./ListCategories.css";
import {
  useSelectedCategory,
  useDispatch,
  updateCategory,
} from "../../AppContext";

const { category_order, category_info } = Config;
const listCategories = category_order;

function ListCategories() {
  const selectedCategoryId = useSelectedCategory();
  const dispatch = useDispatch();
  return (
    <div className="list-categories">
      {listCategories.map((categoryId) => {
        const category = category_info[categoryId] || {};
        const { name, key } = category;
        function handleClick() {
          dispatch(updateCategory(categoryId));
        }
        return (
          <div
            className={`category ${
              selectedCategoryId === categoryId ? "selected" : ""
            }`}
            key={key}
            onClick={handleClick}
          >
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ListCategories;
