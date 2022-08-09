import NavLink from "./NavLink";

const NavLinks = () => {
  const links = [
    {
      label: "Dashboard",
      to: "/dashboard",
    },
    {
      label: "Classes",
      to: "/dashboard/classes",
    },
    {
      label: "Messages",
      to: "/dashboard/messages",
    },
    {
      label: "Announcements",
      to: "/dashboard/announcements",
    },
  ];

  const renderLinks = () =>
    links.map((link, i) => <NavLink key={i} {...link} />);

  return <div className="nav_links">{renderLinks()}</div>;
};

export default NavLinks;
