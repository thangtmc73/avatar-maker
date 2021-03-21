import "./PreviewView.css";
import Item from "./Item";
import { ItemType } from "../../consts";
import { useSelectedItems } from "../../AppContext";

function PreviewView() {
  const selectedItems = useSelectedItems();
  return (
    <div className="preview-view">
      <Item type={ItemType.Hair} id={selectedItems[ItemType.Hair]} />
      <Item type={ItemType.Eyebrows} id={selectedItems[ItemType.Eyebrows]} />
      <Item type={ItemType.Eyes} id={selectedItems[ItemType.Eyes]} />
      <Item
        type={ItemType.Accesories}
        id={selectedItems[ItemType.Accesories]}
      />
      <Item type={ItemType.Tattoos} id={selectedItems[ItemType.Tattoos]} />
      <Item
        type={ItemType.FacialHair}
        id={selectedItems[ItemType.FacialHair]}
      />
      <Item type={ItemType.Mouth} id={selectedItems[ItemType.Mouth]} />
      <Item type={ItemType.Body} id={selectedItems[ItemType.Body]} />
      <Item type={ItemType.Glasses} id={selectedItems[ItemType.Glasses]} />
      <Item type={ItemType.Clothes} id={selectedItems[ItemType.Clothes]} />
    </div>
  );
}

export default PreviewView;
