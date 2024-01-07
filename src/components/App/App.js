import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import IndexHome from "../IndexHome/IndexHome";
import About from "../About/About";
import Category from "../Category/Category";
import { StoreContext } from "../StoreWrapper/StoreWrapper";
import Admin from "../AdminPanel/Admin/Admin";
import Error from "../Error/Error";
import Voices from "../Voices/Voices";
import Logo from "../AdminPanel/Logo/Logo";
import Contact from "../AdminPanel/Contact/Contact";
import User from "../AdminPanel/User/User";
import Hero from "../AdminPanel/Hero/Hero";
import AdminHome from "../AdminPanel/Home/Home";

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
      <Route path="/admin" element={<Admin />}>
        <Route index element={<AdminHome />} />
        <Route path="logo" element={<Logo />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user" element={<User />} />
        <Route path="hero" element={<Hero />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
});

export default App;
