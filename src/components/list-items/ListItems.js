import Config from "../../config";
import "./ListItems.css";
import { useSelectedCategory, useSelectedItems } from "../../AppContext";

const { item_info, category_info } = Config;

function ListItems() {
  const selectedCategoryId = useSelectedCategory();
  const selectedItems = useSelectedItems();
  const selectedItemId = selectedItems[selectedCategoryId];
  const category = category_info[selectedCategoryId];
  if (!category) {
    return null;
  }
  console.log(
    "-----selectedItemId",
    selectedItems,
    selectedCategoryId,
    selectedItemId
  );
  const { order } = category;
  if (!order || !order.length) {
    return null;
  }

  return (
    <div className="list-items">
      {order.map((itemId) => {
        const item = item_info[itemId] || {};
        const { name, component: SVGImage } = item;
        return (
          <div
            className={`item ${selectedItemId === itemId ? "selected" : ""}`}
            key={itemId}
          >
            <SVGImage />
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ListItems;
