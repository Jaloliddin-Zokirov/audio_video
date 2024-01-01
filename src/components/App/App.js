import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import IndexHome from "../IndexHome/IndexHome";
import About from "../About/About";
import Category from "../Category/Category";
import { StoreContext } from "../StoreWrapper/StoreWrapper";
import AdminHome from "../AdminPanel/AdminHome/AdminHome";
import Error from "../Error/Error";
import Voices from "../Voices/Voices";

const App = React.memo(() => {
  const { category } = useContext(StoreContext);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<IndexHome />} />
        <Route path="about" element={<About />} />
        <Route path="voices" element={<Voices />} />
        {category && <Route path={category.src} element={<Category />} />}
      </Route>
      <Route path="/admin" element={<AdminHome />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
});

export default App;
