import { useEffect, useState } from "react";
import { api } from "../../axios";
import "./style.scss";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function GetNews() {
  let [news, setNews] = useState([]);
  useEffect(() => {
    api.get("/news").then((e) => setNews(e.data));
  }, []);
  console.log(news);

  const del = (id) =>{
  api.delete(`/news/${id}`);
  }

  return (
    <div className="news">
      {news.map((pr) => {
        return (
          <div className="new" key={pr._id}>
            <h1 className="tt">Title: {pr.title}</h1>
            <h1 className="ml">Malumot: {pr.malumot}</h1>
            <Button onClick={() => del(pr._id)}  >delete</Button>
            <Link to={`/update/${pr._id}`}>
              <Button variant="outlined">update</Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
