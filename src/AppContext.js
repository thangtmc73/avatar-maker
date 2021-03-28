import React from "react";
import { ItemType, ItemID } from "./consts";

const UPDATE_CATEGORY = "UPDATE_CATEGORY";
const UPDATE_ITEM = "UPDATE_ITEM";

const initialState = {
  selectedCategory: ItemType.Body,
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
  const { type, payload } = action;
  switch (type) {
    case UPDATE_CATEGORY: {
      return {
        ...state,
        selectedCategory: payload,
      };
    }
    case UPDATE_ITEM: {
      const { categoryId, itemId } = payload;
      const { mapSelectedItem } = state;
      return {
        ...state,
        mapSelectedItem: {
          ...mapSelectedItem,
          [categoryId]: itemId,
        },
      };
    }
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

function useDispatch() {
  const { dispatch } = React.useContext(AppContext);
  if (dispatch === undefined) {
    throw new Error("dispatch must be used within a AppProvider");
  }
  return dispatch;
}

function updateCategory(categoryId) {
  return {
    type: UPDATE_CATEGORY,
    payload: categoryId,
  };
}

function updateItem({ categoryId, itemId }) {
  return {
    type: UPDATE_ITEM,
    payload: {
      categoryId,
      itemId,
    },
  };
}

export {
  AppProvider,
  useSelectedItems,
  useSelectedCategory,
  useDispatch,
  updateItem,
  updateCategory,
};
