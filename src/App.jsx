import { Typography, Card } from "@material-tailwind/react";
import { Link, Route, Routes } from "react-router-dom";
import Create from "./Pages/Create";
import GetNews from "./Pages/Get";
import UPdate from "./Pages/update";
import { useTranslation } from 'react-i18next';
export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <div className="bg-red-400 flex p-[20px] justify-evenly">
      <Link to={"/"}>HomePage</Link><br />
      <Link to={"/create"}>Create</Link>
      </div>
      <h1 className="text-[32px] font-[400] text-center m-20px">News:</h1>
      <Routes>
        <Route path="/" element={<GetNews/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/update/:id" element={<UPdate/>}/>
      </Routes>
      <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
    </div>
    </div>
  );
}
