import "./goBack.css";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const GoBack = ({ to }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (to) return navigate(to);
    navigate(-1);
  };

  return (
    <Button onClick={handleGoBack} className="btn_goBack">
      <FontAwesomeIcon icon={faArrowLeft} />
      <h1>Back</h1>
    </Button>
  );
};

export default GoBack;
