import React from "react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name,
          username,
          email,
        }
      );

      console.log("res: ", res);
      console.log("res.data: ", res.data);

      if (res.status === 201) {
        toast.success("user created!!");
        setTimeout(() => {
          navigate("/");
        }, 700);
      } else {
        toast.error(res.statusText);
      }
    } catch (err) {
      toast.error(err.response.statusText);
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <div className="flex flex-col justify-center h-full w-full gap-4 px-[7em] py-[3em] mt-[2em]">
        <h2 className="text-2xl text-center font-semibold text-cyan-800">
          Create User
        </h2>

        <div className="flex items-center justify-center w-full h-full mt-4">
          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-4 items-center justify-center w-152"
          >
            <input
              type="text"
              placeholder="name"
              required
              className="border border-cyan-500 text-slate-600 p-2 w-full rounded-sm outline-cyan-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
             <input
              type="text"
              placeholder="username"
              required
              className="border border-cyan-500 text-slate-600 p-2 w-full rounded-sm outline-cyan-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              required
              className="border border-cyan-500 text-slate-600 p-2 w-full rounded-sm outline-cyan-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="bg-cyan-600 p-2 text-white rounded-sm hover:bg-cyan-700 w-full mt-3">
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
