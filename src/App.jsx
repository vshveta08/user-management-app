import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import User from "./pages/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="/users/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
