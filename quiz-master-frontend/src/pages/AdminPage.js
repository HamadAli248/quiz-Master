import React, { useContext } from "react";
import UserContext from "../components/Services/UserContext";
import Navbar from "../components/Navbar/Navbar";
import AddQuestions from "../components/AdminPage/AddQuestion";
import DeleteQuestions from "../components/AdminPage/DeleteQuestion";
import UpdateQuestion from "../components/AdminPage/UpdateQuestion";
import ChangeUserPermission from "../components/AdminPage/ChangeUserPermission";

const HomePage = () => {
  const { permission } = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <h1>Welcome to Admin Page</h1>
      <h3>
        {permission === "Edit" ? (
          <>You have permission to edit quiz</>
        ) : (
          <> You don't have permission on this page</>
        )}
      </h3>
      <div>
        {permission === "Edit" ? (
          <>
            <ChangeUserPermission />
            <AddQuestions />
            <DeleteQuestions />
            <UpdateQuestion />
          </>
        ) : null}
      </div>
    </div>
  );
};
export default HomePage;
