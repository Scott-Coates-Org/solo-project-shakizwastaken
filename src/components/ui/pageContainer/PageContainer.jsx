import "./pageContainer.css";

import Navbar from "../../navbar/Navbar";
import UserProfile from "../userProfile/UserProfile";

const PageContainer = ({ children }) => {
  return (
    <div className="page">
      <Navbar />

      <div className="page_container">
        <UserProfile />

        {children}
      </div>
    </div>
  );
};

export default PageContainer;
