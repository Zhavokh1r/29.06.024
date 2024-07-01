import { useParams } from "react-router-dom";
import { useState } from "react";
import { api } from "./../../axios";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";

export default function UPdate() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    api.put(`/news/${id}`,data);
  };

  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="rounded-[20px] border-solid border-[#999999] border-[1px] p-[10px] m-[20px]"
          type="text"
          placeholder="Title"
          {...register("title")}
        />
        <input
          className="rounded-[20px] border-solid border-[#999999] border-[1px] p-[10px] m-[20px]"
          type="text"
          placeholder="Malumot"
          {...register("malumot")}
        />
        <button
          className="rounded-[5px] w-[150px] ml-[20px] font-[500] h-[40px] bg-green-400"
          type="submit"
        >
          Yangilikni Ulashish
        </button>
      </form>
    </div>
  );
}
