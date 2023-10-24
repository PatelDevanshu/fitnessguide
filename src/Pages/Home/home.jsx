import Headerimg from "../../Images/home1.jpg";
import DetailsImg from "../../Images/details.jpg";
import ImproveImg from "../../Images/improve.jpg";
import TrainerImg from "../../Images/trainer.jpg";
import JoinImg from "../../Images/joinusimg.jpg";
// import SecondHeader from '../../Images/details.jpg'

import "./home.css";
const Home = () => {
  return (
    <>
      {/*Header */}
      <div className="header">
        <div className="img">
          <img src={Headerimg} alt="" />
        </div>
        <div className="Overlay"></div>
        <div className="HeaderContent">
          <h6>
            <span>Attitude</span> is everything...
          </h6>
          <p>
            <p>
              As we all know, Result to a healthy lifestyle is by staying fit
              and making good body posture.The only thing can keep us fit is by
              working out daily.
            </p>
          </p>
        </div>
      </div>
      {/*Details*/}
      <div className="header_details container">
        <div className="row">
          <div className="col-sm-5">
            <img src={DetailsImg} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-5">
            <h6>Attitude is everything..</h6>
            <h5>
              To Change <br /> Your Attitude is Just <br />
              <span>Join Us</span>
            </h5>
            <p>
              Your attitude determines your success. Whether you're a seasoned
              fitness enthusiast or taking your first step into a gym, your
              attitude sets the tone for your journey. It's the belief in
              yourself, the commitment to change, and the resilience to keep
              pushing forward.
            </p>
            {/* <p>
              Push your fitness further with our mix of facilities and we'll
              support you with advice on new and better ways to train.
            </p> */}
          </div>
        </div>
      </div>
      <div className="details_home_secon">
        <div className="conatiner">
          <div className="row">
            <div className="col-sm-4 offering">We Assist You..</div>
          </div>
          <div className="row">
            <div className="col-sm-6 homecon">
              <div className="box">
                <h6>To Change Yourself</h6>
                <p>
                  YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE. YOUR
                  PERSONAL TRAINING SHOULD REFLECT THAT!!! THAT'S WHAT DEFINES
                  YOUR PERSONALITY
                </p>
              </div>
            </div>
            <div className="col-sm-6 homecon">
              <div className="box">
                <h6>Grow With Us</h6>
                <p>
                  WITH EACH DAY BEING ABLE TO GROW IN HEALTHY LIFE..YOU CAN USE
                  OUR PRODUCTS TO EACH EXERCISE YOU WISH BE ABLE TO GET TRAINED
                  IN.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Header Start
        <div className="second_header">
            <img src={SecondHeader} alt=""  />
        </div> */}

      {/*SEcond Header Start00 */}
      <div className="container custom_section">
        <div className="row">
          <div className="col-sm-8">
            <div className="box">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 col-img">
                    <img src={ImproveImg} className="img-fluid" alt="" />
                  </div>
                  <div className="offset-sm-2 col-sm-5 col-text">
                    <div className="offset-head">Training Plan</div>
                    <div className="offset-text">
                      A well-structured gym training plan is essential for
                      achieving fitness goals. It should include a mix of
                      strength training, cardio, flexibility exercises, and rest
                      days tailored to your needs and preferences. Such a plan
                      ensures effective workouts, motivation, and measurable
                      progress toward your fitness objectives.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>

          <div className="col-sm-8">
            <div className="box">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 col-img">
                    <img src={TrainerImg} className="img-fluid" alt="" />
                  </div>
                  <div className="offset-sm-2 col-sm-5 col-text">
                    <div className="offset-head">Hire Trainer</div>
                    <div className="offset-text">
                      Hiring a trainer offers personalized guidance and
                      motivation, optimizing your workouts for better results.
                      They provide expertise and a structured plan tailored to
                      your goals, helping you maintain a healthy, active
                      lifestyle.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <div className="box">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 col-img">
                    <img src={ImproveImg} className="img-fluid" alt="" />
                  </div>
                  <div className="offset-sm-2 col-sm-5 col-text">
                    <div className="offset-head">Equipments</div>
                    <div className="offset-text">
                      Explore our website for a premium selection of gym
                      products designed to elevate your fitness journey. From
                      high-quality dumbbells to essential workout accessories,
                      our carefully curated range is tailored to meet your
                      fitness needs. Choose excellence and enhance your gym
                      experience with our top-notch fitness gear.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>

          <div className="col-sm-8">
            <div className="box">
              <div className="container">
                <div className="row">
                  <div className="col-sm-5 col-img">
                    <img src={TrainerImg} className="img-fluid" alt="" />
                  </div>
                  <div className="offset-sm-2 col-sm-5 col-text">
                    <div className="offset-head">Protein Supplements</div>
                    <div className="offset-text">
                      We offer a diverse range of protein products designed to
                      support your fitness goals and overall wellness. Whether
                      you're an athlete looking for performance-driven
                      supplements or simply seeking a healthy lifestyle, our
                      selection has you covered.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join us */}

      <div className="custominput container">
        <div className="jnimg">
          <img src={JoinImg} className="joinimg" alt="Join Us" srcset="" />
        </div>
        <div className="Overlay"></div>
        <div className="inptxt">
          <span className="context">Join Now</span>
          <div className="textual">
            Be a part of something great - join us now!
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
