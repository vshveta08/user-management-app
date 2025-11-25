import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { IoClose } from "react-icons/io5";

export default function DeleteModal({ setIsModalOpen, id }) {
  const deleteHandler = async () => {
    // console.log("dt");
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (res.data) {
      toast.success("user deleted!!!");
      setIsModalOpen(false);
    } else {
      toast.error(res.data.msg);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-cyan-600 flex flex-col gap-4 items-center justify-center rounded-md">
          <button
            onClick={() => setIsModalOpen(false)}
            className=" bg-red-400 ml-75 mt-5 px-2 py-1 rounded cursor-pointer"
          >
            <IoClose color="white" size={25} />
          </button>

          <div className="flex flex-col items-center px-10 py-8 ">
            <p className="text-xl font-semibold text-white text-center mb-4">
              Do you want to delete this User?
            </p>
            <div className="flex items-center mt-4 gap-4" >
              <button
                onClick={() => deleteHandler(id)}
                className="flex items-center text-white px-2 py-1 text-xl font-semibold cursor-pointer bg-green-500 hover:bg-green-600 rounded-sm"
              >
                Yes
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex items-center text-white px-2 py-1 text-xl font-semibold cursor-pointer  bg-blue-300 hover:bg-blue-400 rounded-sm"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
