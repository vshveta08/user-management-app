import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import DeleteModal from "../components/DeleteModal";
import { RiLoader4Line } from "react-icons/ri";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = res.data;
      console.log(data);
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // when device is not connected to the internet [ because in this I am fetching online API]
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {isOnline ? (
        <>
          <Toaster />
          <div className="flex flex-col w-full gap-4 sm:px-[7em] px-[2em] py-[3em]">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold text-cyan-800">Users</p>
              <NavLink
                to="/createUser"
                className="bg-cyan-600 p-2 flex items-center gap-1 text-white rounded-sm hover:bg-cyan-700"
              >
                Create New User <FaPlus className="inline-block" />
              </NavLink>
            </div>

            <div className="sm:w-full overflow-auto flex items-center justify-center relative shadow-sm rounded-sm">
              <table className="w-full text-sm text-left text-gray-300 rounded-sm">
                <thead className="text-xs text-white uppercase bg-slate-800">
                  <tr>
                    <th className="sm:px-6 sm:py-3 px-2">Sr. No.</th>
                    <th className="px-6 py-3 cursor-pointer">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="text-center py-6">
                        <div className="flex justify-center items-center gap-2 text-cyan-700 text-lg">
                          <RiLoader4Line className="animate-spin" size={26} />
                          {/* Loading... */}
                        </div>
                      </td>
                    </tr>
                  ) : (
                    <>
                      {users.map((user, index) => (
                        <tr
                          key={user.id}
                          className="odd:bg-slate-700 even:bg-cyan-800 border-b border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-3 sm:px-6 sm:py-4 font-medium whitespace-nowrap text-white"
                          >
                            {index + 1}
                          </th>
                          <td className="px-3 sm:px-6 sm:py-4">
                            <NavLink
                              to={`/users/${user.id}`}
                              state={{ user: user }}
                            >
                              {user.name}
                            </NavLink>
                          </td>
                          <td className="px-3 sm:px-6 sm:py-4">{user.email}</td>
                          <td className="px-3 sm:px-6 py-4 flex gap-2 sm:gap-4 flex-col sm:flex-row">
                            <NavLink
                              to={`/updateUser/${user.id}`}
                              state={{
                                id: user.id,
                                name: user.name,
                                username: user.username,
                                email: user.email,
                              }}
                              className="flex items-center gap-1 font-medium text-blue-600 bg-slate-200 p-1 px-3 hover:bg-white rounded-sm"
                            >
                              Edit <MdEdit size={18} />
                            </NavLink>
                            <button
                              onClick={() => {
                                setIsModalOpen(true);
                              }}
                              className="flex items-center text-red-600 font-medium cursor-pointer bg-slate-200 p-1 hover:bg-white rounded-sm"
                            >
                              Delete <MdDelete size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {isModalOpen && (
            <div className="w-full h-full fixed flex items-center justify-center backdrop-blur-xs">
              <DeleteModal setIsModalOpen={setIsModalOpen} id={users.id} />
            </div>
          )}
        </>
      ) : (
        <>
          <h2>No Internet Connection.</h2>
          <p>
            {" "}
            Please connect device to the the internet. ( because in this I am
            working on the online API.){" "}
          </p>
        </>
      )}
    </div>
  );
}
