import "./viewDataValueCard.css";

const ViewDataValueCard = ({ dataLabel, value }) => {
  return (
    <div className="viewDataValueCard_container">
      <h1 className="viewDataValueCard_value">
        {value}
        <h3 className="viewDataValueCard_label">{dataLabel}</h3>
      </h1>
    </div>
  );
};

export default ViewDataValueCard;
