import UserProfile from "../userProfile/UserProfile";

const PageContainer = ({ children }) => {
  return (
    <div className="page_container">
      <UserProfile />

      {children}
    </div>
  );
};

export default PageContainer;
