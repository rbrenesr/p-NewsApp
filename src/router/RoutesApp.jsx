import { Routes, Route } from "react-router-dom"
import { NewHome, New } from "../news/pages"

export const RoutesApp = () => {
  return (
    <>    
    <Routes>
      <Route path="/" element={<NewHome />}></Route>
      <Route path="new/" element={<New />}></Route>
    </Routes>
  </>
  )
}
