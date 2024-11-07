import { FunctionComponent } from "react";
import { FormikValues, useFormik } from "formik";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { User } from "../interfaces/User";
import { loginUser } from "../service/usersService";
import Header from "./Header";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const { email, password } = useParams();
  const navigate: NavigateFunction = useNavigate();
  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup
        .string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: (values) => {
      loginUser(values.email, values.password)
        .then(() => navigate("/home"))
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    },
  });
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h5 className="display-5">Login</h5>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="john@doe.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Email</label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="052-8536253"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Password</label>
            {formik.touched.password && formik.errors.password && (
              <p className="text-danger">{formik.errors.password}</p>
            )}
          </div>
          <button
            className="btn btn-success w-100 mb-3"
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
          >
            Login
          </button>
          <div>
            Don't have an account? <a href="/register">Register</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
