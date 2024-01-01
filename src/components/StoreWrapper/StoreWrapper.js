import React, { createContext, useReducer } from "react";

export const StoreContext = createContext();

const StoreWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreWrapper;

const initialState = {
  loading: false,
  category: {
    src: "",
    id: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case "category": {
      return {
        ...state,
        category: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
