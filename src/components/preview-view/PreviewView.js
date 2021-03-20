import "./PreviewView.css";
import Item from "./Item";
import { ItemType, ItemID } from "../../consts";

function PreviewView() {
  return (
    <div className="preview-view">
      <Item type={ItemType.Hair} id={ItemID.LongCurlyHair} />
      <Item type={ItemType.Eyebrows} id={ItemID.SadEyebrows} />
      <Item type={ItemType.Eyes} id={ItemID.CryEyes} />
      <Item type={ItemType.Accesories} id={ItemID.Earing1Accesories} />
      <Item type={ItemType.Tattoos} id={ItemID.ThroatTattoos} />
      <Item type={ItemType.FacialHair} id={ItemID.FancyFacialHair} />
      <Item type={ItemType.Mouth} id={ItemID.SmileMouth} />
      <Item type={ItemType.Body} id={ItemID.DefaultBody} />
      <Item type={ItemType.Glasses} id={ItemID.NerdGlasses} />
      <Item type={ItemType.Clothes} id={ItemID.HoodieClothes} />
    </div>
  );
}

export default PreviewView;
