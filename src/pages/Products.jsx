import React, { useEffect, useState } from "react";
import axios from "axios";

const cssStyle = {
  width: "120px",
  height: "240px",
};
function Products() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/showAllProduct")
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
      {/* <!-- Start Banner Area --> */}
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center">
            <div className="col-first">
              <h1>Shop Products</h1>
              <nav className="d-flex align-items-center justify-content-start">
                <a href="/">
                  Home<i className="fa fa-caret-right" aria-hidden="true"></i>
                </a>
                <a href="/product">Products</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}
      <div className="container">
        
        <section className="lattest-product-area pb-40 category-list">
           <div className="row mx-3">
            {
            state &&  state.slice(0, 12).map((cardInfo, index) => {
                
                return (
                  <>
                    <div className="col-sm-2 single-product">
                      <div className="content-overlay"></div>
                      <iframe
                        style={cssStyle}
                        marginwidth="0"
                        marginheight="0"
                        scrolling="no"
                        frameborder="0"
                        className="img-fluid d-block mx-auto"
                        src={cardInfo.flipkart_link.toString()}
                      ></iframe>
                    </div>
                  </>
                );
              })
              }
          </div>
        </section>
      </div>
    </>
  );
}
export default Products;
