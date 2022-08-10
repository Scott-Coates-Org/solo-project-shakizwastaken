import {
  faBullhorn,
  faCalendar,
  faHome,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLink from "./NavLink";

const NavLinks = ({ isOpen }) => {
  const links = [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      label: "Schedule",
      to: "/user/schedule",
      icon: <FontAwesomeIcon icon={faCalendar} />,
    },
    {
      label: "Messages",
      to: "/user/messages",
      icon: <FontAwesomeIcon icon={faMessage} />,
    },
    {
      label: "Announcements",
      to: "/announcements",
      icon: <FontAwesomeIcon icon={faBullhorn} />,
    },
  ];

  const renderLinks = () =>
    links.map((link, i) => <NavLink key={i} isOpen={isOpen} {...link} />);

  return <div className="nav_links">{renderLinks()}</div>;
};

export default NavLinks;
