import "./product.css";
import productheader from "../../Images/product_header.jpg";
import d1 from "../../Images/dumbel1.webp";
import d2 from "../../Images/treadmill.jpeg";
import d3 from "../../Images/skipping.jpg";
import d4 from "../../Images/barbell.jpeg";
import d5 from "../../Images/gymball.jpg";
import d6 from "../../Images/kettlebell.jpeg";
import i1 from "../../Images/wheyprotein.png";
import i2 from "../../Images/proteinbar.png";
import i3 from "../../Images/proteincookies.png";
import i4 from "../../Images/chips.png";
import i5 from "../../Images/oatmeals.png";
import i6 from "../../Images/peanutbutter.png";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="productpage">
        <div>
          <img src={productheader} alt="" />
        </div>
      </div>
      <div className="container products">
        <div className="content">
          <h6>
            Check Our <span>Products</span>
          </h6>
          <p>
            We Provide you the Best Quality Products as you need in Gaining
            Healthy body.
          </p>
        </div>

        <div className="pall">
          <div className="p1_header">
            <div className="h1">
              <h2>Types Of Products</h2>
            </div>
          </div>

          <div className="row">
            <div className="dheader">
              <h2>Gym Equipments</h2>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={d1} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Dumbbell
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={d2} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Treadmill
                    <br></br>Price : 5000 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={d3} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Skipping Ropes
                    <br></br>Price : 200 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={d4} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Barbell
                    <br></br>Price : 1500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={d5} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Stability Ball
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={d6} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Kettlebell Weights
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="dheader">
              <h2>Protein Products</h2>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={i1} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Wheyy Protein Powder
                    <br></br>Price : 5000 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={i2} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Protein Bars
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={i3} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Protein Cookies
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={i4} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Protein Based Chips
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={i5} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Proteins Oatmeal
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <div className="imgcont">
                  <img src={i6} className="img-fluid imging" alt="" />
                </div>
                <div className="price">
                  <h5>
                    Peanut Butter
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
