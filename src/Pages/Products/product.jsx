import "./product.css";
import productheader from "../../Images/product_header.jpg";
import d1 from "../../Images/dumbel1.jpg";
import d2 from "../../Images/dumbel2.jpg";
import d3 from "../../Images/dumbel3.jpg";
import d4 from "../../Images/dumbel4.jpg";
import d5 from "../../Images/dumbel5.jpg";
import d6 from "../../Images/dumbel6.webp";

const Products = () => {
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
              <h2>Dumbbells</h2>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <img src={d1} className="img-fluid" alt="" />
                <div className="price">
                  <h5>
                    5 Kgs Dumbbell
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <img src={d2} className="img-fluid" alt="" />
                <div className="price">
                  <h5>
                    5 Kgs Dumbbell
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <img src={d3} className="img-fluid" alt="" />
                <div className="price">
                  <h5>
                    5 Kgs Dumbbell
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <img src={d4} className="img-fluid" alt="" />
                <div className="price">
                  <h5>
                    5 Kgs Dumbbell
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <img src={d5} className="img-fluid" alt="" />
                <div className="price">
                  <h5>
                    5 Kgs Dumbbell
                    <br></br>Price : 500 Rs.
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cols">
              <div className="box">
                <img src={d6} className="img-fluid" alt="" />
                <div className="price">
                  <h5>
                    5 Kgs Dumbbell
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
