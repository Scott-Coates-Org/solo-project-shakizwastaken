import PortalScreenTitle from "../screenTitle/ScreenTitle";

const PortalPage = ({ children, title, className }) => {
  return (
    <>
      <PortalScreenTitle title={title} />
      <div className={`portal_container_content ${className}`}>{children}</div>
    </>
  );
};

export default PortalPage;
