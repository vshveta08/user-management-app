import { useLocation } from "react-router-dom";

export default function User() {
  const location = useLocation();
  const { user } = location.state;

  console.log(user);

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <div className="flex flex-col w-full gap-4 px-[7em] py-[3em]">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold text-cyan-800"> {user.name}</p>
        </div>
        <div className="flex items-center justify-center w-full relative shadow-md rounded-md">
          <table className="w-full text-sm text-left text-gray-300 rounded-sm">
            <tbody className="">
              <tr className="bg-slate-800 text-white">
                <th className="px-6 py-3">ID</th>
                <td className="px-6 py-3">{user.id}</td>
              </tr>
              <tr className="odd:bg-slate-700 even:bg-cyan-800 border-b border-gray-700">
                <th className="px-6 py-3 text-white">Username</th>
                <td className="px-6 py-3">{user.username}</td>
              </tr>
              <tr className="odd:bg-slate-700 even:bg-cyan-800 border-b border-gray-700">
                <th className="px-6 py-3 text-white">Email</th>
                <td className="px-6 py-3">{user.email}</td>
              </tr>
              <tr className="odd:bg-slate-700 even:bg-cyan-800 border-b border-gray-700">
                <th className="px-6 py-3 text-white">Phone</th>
                <td className="px-6 py-3">{user.phone}</td>
              </tr>
              <tr className="odd:bg-slate-700 even:bg-cyan-800 border-b border-gray-700">
                <th className="px-6 py-3 text-white">Website</th>
                <td className="px-6 py-3">{user.website}</td>
              </tr>

              {/* Address Details --> */}
              <tr className="bg-gray-300  text-cyan-800">
                <th className="px-6 py-3" colSpan="2">
                  Address Details
                </th>
              </tr>
              <tr className="odd:bg-slate-700 even:bg-cyan-800">
                <th className="px-6 py-3 text-white">Street</th>
                <td className="px-6 py-3">{user.address.street}</td>
              </tr>
              <tr className="odd:bg-slate-700 even:bg-cyan-800">
                <th className="px-6 py-3 text-white">City</th>
                <td className="px-6 py-3">{user.address.city}</td>
              </tr>
              <tr className="odd:bg-slate-700 even:bg-cyan-800">
                <th className="px-6 py-3 text-white">Zipcode</th>
                <td className="px-6 py-3">{user.address.zipcode}</td>
              </tr>

              {/* Company Details --> */}
              <tr className="bg-gray-300  text-cyan-800">
                <th className="px-6 py-3" colSpan="2">
                  Company Details
                </th>
              </tr>
              <tr className="odd:bg-slate-700 even:bg-cyan-800 border-b border-gray-700">
                <th className="px-6 py-3 text-white">Company Name</th>
                <td className="px-6 py-3">{user.company.name}</td>
              </tr>
              <tr className="odd:bg-slate-700 even:bg-cyan-800 border-b border-gray-700">
                <th className="px-6 py-3 text-white">CatchPhrase</th>
                <td className="px-6 py-3">{user.company.catchPhrase}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
