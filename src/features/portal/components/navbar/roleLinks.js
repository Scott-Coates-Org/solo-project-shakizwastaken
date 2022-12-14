import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faCalendar,
  faHome,
  faInstitution,
  faMessage,
  faNewspaper,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export const roleLinks = {
  MANAGER: [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      label: "School leveling",
      to: "/school/leveling",
      icon: <FontAwesomeIcon icon={faInstitution} />,
    },
    {
      label: "Classes",
      to: "/school/viewClasses",
      icon: <FontAwesomeIcon icon={faNewspaper} />,
    },
    {
      label: "Users",
      to: "/school/viewUsers",
      icon: <FontAwesomeIcon icon={faUserGroup} />,
    },

    {
      label: "Your messages",
      to: "/user/me/messages",
      icon: <FontAwesomeIcon icon={faMessage} />,
    },
  ],
  INSTRUCTOR: [
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
      label: "Announcements",
      to: "/announcements",
      icon: <FontAwesomeIcon icon={faBullhorn} />,
    },
    {
      label: "Your messages",
      to: "/user/messages",
      icon: <FontAwesomeIcon icon={faMessage} />,
    },
  ],
  STUDENT: [
    {
      label: "Dashboard",
      to: "/dashboard",
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      label: "Schedule",
      to: "/school/schedule/me",
      icon: <FontAwesomeIcon icon={faCalendar} />,
    },
    {
      label: "Announcements",
      to: "/announcements",
      icon: <FontAwesomeIcon icon={faBullhorn} />,
    },
    {
      label: "Your messages",
      to: "/user/messages",
      icon: <FontAwesomeIcon icon={faMessage} />,
    },
  ],
};
