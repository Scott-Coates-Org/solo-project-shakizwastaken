import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { roleLinks } from "./roleLinks";

import NavLink from "./NavLink";

const NavLinks = ({ isOpen }) => {
  const {
    user: { role },
  } = useCurrentUser();

  const links = roleLinks[role];

  const renderLinks = () =>
    links.map((link, i) => <NavLink key={i} isOpen={isOpen} {...link} />);

  return <div className="nav_links">{renderLinks()}</div>;
};

export default NavLinks;
