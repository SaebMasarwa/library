import { FunctionComponent } from "react";
import { FormikValues, useFormik } from "formik";
import * as yup from "yup";
import { addBook } from "../service/booksService";
import { Book } from "../interfaces/Book";
import { NavigateFunction, useNavigate } from "react-router-dom";
interface NewBookProps {
  setIsNewContent: Function;
}

const NewBook: FunctionComponent<NewBookProps> = ({ setIsNewContent }) => {
  const navigate: NavigateFunction = useNavigate();
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
      addBook(values as Book)
        .then(() => {
          navigate("/home");
          setIsNewContent(true);
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="w-25 m-4">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="bookName"
            placeholder="Harry Potter"
            name="bookName"
            value={formik.values.bookName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="floatingInput">Book Name</label>
          {formik.touched.bookName && formik.errors.bookName && (
            <p className="text-danger">{formik.errors.bookName}</p>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Author"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="floatingInput">Author</label>
          {formik.touched.author && formik.errors.author && (
            <p className="text-danger">{formik.errors.author}</p>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="genre"
            placeholder="Novel"
            name="genre"
            value={formik.values.genre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="floatingInput">Genre</label>
          {formik.touched.genre && formik.errors.genre && (
            <p className="text-danger">{formik.errors.genre}</p>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="floatingInput">Price</label>
          {formik.touched.price && formik.errors.price && (
            <p className="text-danger">{formik.errors.price}</p>
          )}
        </div>
        <button
          className="btn btn-success w-100 mb-3"
          type="submit"
          disabled={!formik.isValid || !formik.dirty}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default NewBook;
