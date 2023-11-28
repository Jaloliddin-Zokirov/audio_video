import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import IndexHome from "../IndexHome/IndexHome";
import About from "../About/About";
import Category from "../Category/Category";
import { StoreContext } from "../StoreWrapper/StoreWrapper";

function App() {
  const { category } = useContext(StoreContext);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<IndexHome />} />
        <Route path="about" element={<About />} />
        <Route path={category.src} element={<Category firstName={category.firstName} lastName={category.lastName} />} />
      </Route>
    </Routes>
  );
}

export default App;
