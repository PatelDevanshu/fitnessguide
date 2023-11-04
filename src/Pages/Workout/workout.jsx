import "./workout.css";
import workoutheader from "../../Images/workout_header.webp";
import w1 from "../../Images/w1.webp";
import w2 from "../../Images/w2.webp";
import w3 from "../../Images/w3.webp";
import w4 from "../../Images/w4.jpeg";
import { useEffect } from "react";

const Workout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="workoutpage">
        <div>
          <img src={workoutheader} alt="" />
        </div>
      </div>
      <div className="container workout">
        <div className="content">
          <h6>We Welcome You to the Workout Categories of our Website.</h6>
          <p>
            The best routine for the gym is one that is flexible with your
            schedule and you actually enjoy. These two factors will contribute
            greatly to your ability to be consistent with your workouts.
            Consistency with your workouts and progressing as you perform them
            is what will lead to results.
          </p>
        </div>

        <div className="workoutplan">
          <div className="conatiner">
            <div className="row">
              <div className="col-sm-6">
                <div className="box">
                  <h6>Daily Workout</h6>
                  <p>
                    <img src={w1} alt="" />
                    This simple, yet effective full body workout maximizes fat
                    loss and overall fitness performance. With very minimal
                    equipment you can burn calories and start moving better.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <h6>Belly Fat Loss</h6>
                  <p>
                    <img src={w2} alt="" />
                    This is a complete 12 week program to help you get ripped.
                    Feature includes detailed diet plan and cardio schedule,
                    along with a 4 day upper/lower muscle building split.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <h6>Fat Loss Workout</h6>
                  <p>
                    <img src={w3} alt="" />
                    This simple, yet effective full body workout maximizes fat
                    loss and overall fitness performance. With very minimal
                    equipment you can burn calories and start moving better.
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="box">
                  <h6>Build Muscles</h6>
                  <p>
                    <img src={w4} alt="" />
                    This is a complete 12 week program to help you get ripped.
                    Feature includes detailed diet plan and cardio schedule,
                    along with a 4 day upper/lower muscle building split.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Workout;
