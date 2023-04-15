
import List from "./List/List";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
export const App = () => {
  return (
   <div className="container">
   <Header/>
   <Routes>
   <Route path="/tweets" element={<List/>} />
   <Route path="/main" element={<Home />} />
   </Routes>

   </div>
  );
};
