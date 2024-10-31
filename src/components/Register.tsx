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
          navigate("/");
        });
    },
  });
  return (
    <>
      <h1 className="display-1 text-center bg-black text-white">
        Book Collection
      </h1>
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h5 className="display-5">Register</h5>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="John"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="floatingInput">Name</label>
            {formik.touched.name && formik.errors.name && (
              <p className="text-danger">{formik.errors.name}</p>
            )}
          </div>
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
            Add
          </button>
          {/* <button className="btn btn-secondary" onClick={() => navigate(-1)}>
            Back
          </button> */}
        </form>
      </div>
    </>
  );
};

export default Login;
