import { FunctionComponent, useEffect, useState } from "react";
import BooksTable from "./BooksTable";
import Header from "./Header";
import NewBook from "./NewBook";
import { redirect } from "react-router-dom";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [isNewContent, setIsNewContent] = useState(false);
  const storedValue = sessionStorage.getItem("loggedIn");
  useEffect(() => {
    if (!storedValue) {
      redirect("/login");
    }
  });
  return (
    <>
      <Header />
      {storedValue ? (
        <>
          <div className="container d-flex justify-content-center align-items-center f">
            <NewBook setIsNewContent={setIsNewContent} />
            <BooksTable
              isNewContent={isNewContent}
              setIsNewContent={setIsNewContent}
            />
          </div>
        </>
      ) : (
        "Please login to view this page"
      )}
    </>
  );
};

export default Home;
