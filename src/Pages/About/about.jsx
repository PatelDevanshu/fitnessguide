import AboutHeader from "../../Images/about_header.jpg";
import AboutMain from "../../Images/about_main.jpg";
import "./about.css";

const AboutPage = () => {
  return (
    <>
      <div className="aboutPage">
        <div>
          <img src={AboutHeader} alt="" />
        </div>
      </div>
      <div className="about_main container">
        <div className="row">
          <div className="offset-sm-1 col-sm-5">
            <img src={AboutMain} className="img-fluid" alt="" />
          </div>

          <div className="col-sm-5">
            <h6>About Us</h6>
            <h5>Fitness Guide</h5>
            <p>
              WE as a Online Fitness Providers would present you the best
              Motivation with all Fitness guidance you require. Latest fitness
              equipment. 10,000 sq.ft. of gym workout space. A brand new gym.
              Dedicated personal training and CrossFit Studio. Internationally
              certified personal trainers. We are the champions of fitness. We
              are Waves Gym.
              <br />
              We have no qualms in calling ourselves the best gym in Andheri
              West. Not only do you get assistance at every step and point, but
              you also get personalized and customized workout and dietary
              programs.
              <br />
              From the reception team to floor trainers; they come with a sense
              of familiarity. At Waves, you are family!
              <br />
              We also provide free valet parking, daily use lockers and shoe
              lockers.
              <br />
              Popular group exercise classes- Zumba Fitness, Power Yoga,
              Ashtanga Yoga, Indoor Cycling and CrossFit Classes. Book your
              classes with our free one click App.
              <br />
              That's Waves Gym for you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutPage;
