import Hero from "./Hero";

// About us page
const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="containter">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">Lets GOOOOO</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
