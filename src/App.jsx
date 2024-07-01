import { Typography, Card } from "@material-tailwind/react";
import { Link, Route, Routes } from "react-router-dom";
import Create from "./Pages/Create";
import GetNews from "./Pages/Get";
import UPdate from "./Pages/update";

export default function App() {
  return (
    <div>
      <div className="bg-red-400 flex p-[20px] justify-evenly">
      <Link to={"/"}>Home Page</Link><br />
      <Link to={"/create"}>Create</Link>
      </div>
      <h1 className="text-[32px] font-[400] text-center m-20px">News:</h1>
      <Routes>
        <Route path="/" element={<GetNews/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<UPdate/>}/>
      </Routes>
    </div>
  );
}
