import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../../services/firebase/client";

import Button from "../../../components/ui/button/Button";
import Input from "../../../components/ui/input/Input";

const LoginForm = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //global form error
  const [err, setError] = useState(null);

  const onSubmit = async (data) => {
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (err) {
      if (["auth/user-not-found", "auth/wrong-password"].includes(err.code)) {
        setError("Email and password not matching");
      } else {
        console.log(err.code);
        setError(err.code);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login_form">
      {err && <h1 className="login_form_err">{err}</h1>}

      <Input label="Email:" err={errors?.email}>
        <input
          placeholder="enter your email"
          type="email"
          {...register("email", { required: true })}
        />
      </Input>
      <h1 className="login_input_err">{errors?.email?.message}</h1>

      <Input label="Password:" err={errors?.password}>
        <input
          placeholder="enter your password"
          type="password"
          {...register("password", { required: true })}
        />
      </Input>

      <Button className="login_form_btn">Login</Button>
    </form>
  );
};

export default LoginForm;
