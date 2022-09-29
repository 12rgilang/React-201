import Hero from "./Hero";

// adding functional home
const Home = () => {
  return (
    <>
      <Hero text="This is Home page for REACT 201" />
      <div className="containter">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">lorem ipsum</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
