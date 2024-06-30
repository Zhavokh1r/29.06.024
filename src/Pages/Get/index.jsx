import { useEffect, useState } from "react"
import { api } from "../../axios"

export default function GetNews(){
    let [news , setNews] = useState([])
    useEffect(()=> {
        api.get("/malumot").then((e)=> setNews(e.data))
    } , [])
    console.log(news);
    return <div>
        {news.map(pr => {
            return <div className="w-[300px] h-[200px] bg-[khaki] flex-col justify-center items-center gap-[20px] m-auto mb-[20px] rounded-[20px] flex " key={pr._id}>
                <h1>Title: {pr.title}</h1>
                <h1>Malumot: {pr.malumot}</h1>
            </div>
        })}
    </div>
}