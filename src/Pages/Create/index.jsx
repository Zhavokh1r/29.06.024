import { useState } from "react";
import { api } from "./../../axios";

export default function Create() {
  const [title, setTitle] = useState("");
  const [malumot, setMalumot] = useState("");

  const newMalumot = (e) => {
    e.preventDefault();
    api.post("/malumot", {
      title: title,
      malumot: malumot,
    });
  };

  return (
    <div>
      <form onSubmit={newMalumot}>
        <input className="rounded-[20px] border-solid border-[#999999] border-[1px] p-[10px] m-[20px]"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input className="rounded-[20px] border-solid border-[#999999] border-[1px] p-[10px] m-[20px]"
          type="text"
          placeholder="Malumot"
          value={malumot}
          onChange={(e) => setMalumot(e.target.value)}
        />
        <button className="rounded-[5px] w-[150px] ml-[20px] font-[500] h-[40px] bg-green-400" type="submit">Yangilikni Ulashish</button>
      </form>
    </div>
  );
}
