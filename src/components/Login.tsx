import { FunctionComponent } from "react";
import { FormikValues, useFormik } from "formik";
import { NavigateFunction, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { User } from "../interfaces/User";
import { addUser } from "../service/usersService";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate: NavigateFunction = useNavigate();
  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      email: yup.string().email().required(),
      password: yup
        .string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: (values) => {
      addUser(values as User)
        .then(() => navigate("/home"))
        .catch((err) => {
          console.log(err);
          navigate("/home");
        });
    },
  });
  return <></>;
};

export default Login;
