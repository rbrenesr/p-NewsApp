import { Route, Routes } from "react-router-dom";
import {
  HeaderComp,
  ContainerComp,
  MainComp,
  FooterComp,
} from "./news/componets";
import { New } from "./news/componets/New";
import { NewHome } from "./news/pages/NewHome";

export const NewsApp = () => {
  return (
    <>    
      <Routes>
        <Route path="/" element={<NewHome />}></Route>
        <Route path="new/:q" element={<New />}></Route>
      </Routes>
    </>
  );
};
