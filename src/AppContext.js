import React from "react";
import { ItemType, ItemID } from "./consts";

const initialState = {
  selectedCategory: ItemType.Eyes,
  mapSelectedItem: {
    [ItemType.Body]: ItemID.DefaultBody,
    [ItemType.Eyes]: ItemID.DefaultEyes,
    [ItemType.Mouth]: ItemID.DefaultMouth,
    [ItemType.Tattoos]: ItemID.NoneTattoos,
    [ItemType.Hair]: ItemID.ShortSidesHair,
    [ItemType.Accesories]: ItemID.NoneAccesories,
    [ItemType.FacialHair]: ItemID.NoneFacialHair,
    [ItemType.Eyebrows]: ItemID.DefaultEyebrows,
    [ItemType.Clothes]: ItemID.NoneClothes,
    [ItemType.Glasses]: ItemID.NoneGlasses,
  },
};

const AppContext = React.createContext(initialState);

function appReducer(state, action) {
  const { type } = action;
  switch (type) {
    default: {
      return state;
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useSelectedItems() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  const { mapSelectedItem } = context;
  return mapSelectedItem;
}

function useSelectedCategory() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  const { selectedCategory } = context;
  return selectedCategory;
}

export { AppProvider, useSelectedItems, useSelectedCategory };
