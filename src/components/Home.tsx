import { FunctionComponent } from "react";
import BooksTable from "./BooksTable";
import Header from "./Header";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center f">
        <BooksTable />
      </div>
    </>
  );
};

export default Home;
