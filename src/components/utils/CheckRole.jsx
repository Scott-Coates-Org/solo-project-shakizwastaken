import { useCurrentUser } from "../../hooks/useCurrentUser";

const CheckRole = ({ getComponent }) => {
  const {
    user: { role },
  } = useCurrentUser();

  return getComponent(role);
};

export default CheckRole;
