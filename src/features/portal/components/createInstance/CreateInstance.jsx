import "./createInstance.css";

import Button from "../../../../components/ui/button/Button";

const SchoolCreateInstance = ({
  className,
  handleSubmit,
  lowerCaseName,
  children,
}) => {
  return (
    <div className={`school_createInstance ${className}`}>
      <h1>Add new {lowerCaseName}</h1>

      <form onSubmit={handleSubmit}>
        {children}

        <Button type="submit" className="school_createInstance_submit">
          Create {lowerCaseName}
        </Button>
      </form>
    </div>
  );
};

export default SchoolCreateInstance;
