import { FunctionComponent, useState } from "react";
import BooksTable from "./BooksTable";
import Header from "./Header";
import NewBook from "./NewBook";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [isNewContent, setIsNewContent] = useState(false);
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center f">
        <NewBook setIsNewContent={setIsNewContent} />
        <BooksTable
          isNewContent={isNewContent}
          setIsNewContent={setIsNewContent}
        />
      </div>
    </>
  );
};

export default Home;
