import createDataContext from "./createDataContext";
import { v1 as uuid } from "uuid";

const initialState = [
  { id: uuid(), name: "Eggs" },
  { id: uuid(), name: "Milk" },
  { id: uuid(), name: "Steak" },
  { id: uuid(), name: "Water" },
];

const itemReducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, items: [action.payload] };
    case "POST_ITEM":
      return { ...state, items: [action.payload, ...state.items] };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((ele) => ele.id !== action.payload),
      };
    default:
      return false;
  }
};

const getItems = (dispatch) => () => {
  dispatch({ type: "GET_ITEMS", payload: initialState });
};

const addItem = (dispatch) => (item) => {
  dispatch({ type: "POST_ITEM", payload: item });
};

const deleteItem = (dispatch) => (id) => {
  dispatch({ type: "DELETE_ITEM", payload: id });
};

export const { Provider, Context } = createDataContext(
  itemReducer,
  { getItems, addItem, deleteItem },
  { items: initialState }
);
