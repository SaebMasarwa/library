import { FunctionComponent } from "react";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";

interface NewBookProps {}

const NewBook: FunctionComponent<NewBookProps> = () => {
  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      bookName: "",
      author: "",
      genre: "",
      price: 0,
    },
    validationSchema: yup.object({
      bookName: yup.string().required(),
      author: yup.string().required(),
      genre: yup.string().required(),
      price: yup.number().required(),
    }),
    onSubmit: (values) => {
      addBook(values.email, values.password)
        .then(() => navigate("/home"))
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    },
  });

  return (
    <>
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
    </>
  );
};

export default NewBook;
