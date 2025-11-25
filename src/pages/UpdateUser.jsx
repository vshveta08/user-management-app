import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateUser() {
  const location = useLocation();
  const { id, name, username, email } = location.state;

  const [updatedName, setUpdatedName] = useState(name);
  const [updatedUserName, setUpdatedUserName] = useState(username);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          name: updatedName,
          username: updatedUserName,
          email: updatedEmail,
        }
      );
      console.log("data: ", res.data);

      if (res.data) {
        toast.success("user updated!!");
        setTimeout(() => {
          navigate("/");
        }, 700);
      } else {
        toast.error(res.data.msg);
      }
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <div className="flex flex-col justify-center h-full w-full gap-4 px-[7em] py-[3em] mt-[2em]">
        <h2 className="text-2xl text-center font-semibold text-cyan-800">
          Update User
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
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <input
              type="text"
              placeholder="username"
              required
              className="border border-cyan-500 text-slate-600 p-2 w-full rounded-sm outline-cyan-600"
              value={updatedUserName}
              onChange={(e) => setUpdatedUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              required
              className="border border-cyan-500 text-slate-600 p-2 w-full rounded-sm outline-cyan-600"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />

            <button className="bg-cyan-600 p-2 cursor-pointer text-white rounded-sm hover:bg-cyan-700 w-full mt-3">
              Update User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
