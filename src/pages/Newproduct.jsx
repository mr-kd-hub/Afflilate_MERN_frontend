import React, { useEffect, useState } from "react";
import axios from "axios";

const cssStyle = {
  width: "120px",
  height: "240px",
};
function Newproduct() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/showProduct")
      .then((res) => {
        // console.log(res.data)
        if (res.data.msg === "Success") {
          setState(res.data.product);
        }
      })
      .catch((err) => {
        console.log("problem in login : " + err);
      });
  }, []);

  return (
    <>
      {/* <!-- Start men-product Area --> */}
      <section className="men-product-area section-gap relative" id="men">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-40">
              <div className="title text-center">
                <h1 className="text-white mb-10">New realeased Products</h1>
                <p className="text-white">
                  Who are in extremely love with eco friendly system.
                </p>
              </div>
            </div>
          </div>
          <div className="row mx-2">
            {state &&
              state.slice(0, 6).map((cardInfo, index) => {
                return (
                  <>
                    <div className="col-sm-2 single-product">
                      <div className="content-overlay"></div>
                      <iframe
                        className="img-fluid d-block mx-auto"
                        style={cssStyle}
                        src={cardInfo.flipkart_link}
                      ></iframe>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>
      {/* <!-- End men-product Area --> */}
    </>
  );
}
export default Newproduct;
