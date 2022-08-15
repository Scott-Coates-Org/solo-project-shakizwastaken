import Button from "../components/ui/button/Button";
import { useNavigate } from "react-router-dom";

const ComingSoonScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-2xl font-bold select-none text-complementary">
        This feature is coming soon...
      </h1>

      <Button
        className="py-2 px-4 w-fit bg-complementary text-white flex justify-center items-center"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Go Back to Dashboard
      </Button>
    </div>
  );
};

export default ComingSoonScreen;
