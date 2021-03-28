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
  const { state } = React.useContext(AppContext);
  if (state === undefined) {
    throw new Error("state must be used within a AppProvider");
  }
  const { mapSelectedItem } = state;
  return mapSelectedItem;
}

function useSelectedCategory() {
  const { state } = React.useContext(AppContext);
  if (state === undefined) {
    throw new Error("state must be used within a AppProvider");
  }
  const { selectedCategory } = state;
  return selectedCategory;
}

export { AppProvider, useSelectedItems, useSelectedCategory };
