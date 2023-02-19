import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultPage } from "./components/DefaultPage";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import ScrollToTop from "./components/ScrollToTop";
import { NotFound } from "./pages/404";
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
