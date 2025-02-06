import { useRef } from "react";
import "./HomePage.css";
function HomePage() {
  const carouselContainerRef = useRef(null);

  // Scroll to the previous card
  const handlePrevClick = () => {
    if (carouselContainerRef.current) {
      const scrollAmount = carouselContainerRef.current.offsetWidth;
      carouselContainerRef.current.scrollLeft -= scrollAmount; // Scroll left by the width of one card
    }
  };
  return (
    <div className="container-fluid my-4">
      <div className="row my-2">
        <div className="col position-relative">
          <img
            src="https://themewagon.github.io/hexashop/assets/images/left-banner-image.jpg"
            alt=""
            className="img-fluid w-100 "
            style={{ maxHeight: "785px" }}
          />
          <div className="position-absolute top-50 mx-5">
            <span className="d-block category-name display-5">
              This week's Top Offer{" "}
            </span>
            <span className="d-block category-description fs-4">
              Your taste is here
            </span>
            <button className="btn">Shop Now</button>
          </div>
        </div>
        <div className="col">
          <div className="container-fluid ">
            <div className="row mb-4">
              <div className="col position-relative product-card ">
                <img
                  src="https://themewagon.github.io/hexashop/assets/images/baner-right-image-01.jpg"
                  alt=""
                  className="img-fluid w-100 "
                />
                <div className="position-absolute top-50 w-100 justify-content-center  text-center">
                  <span className="d-block category-name fs-2">Men</span>
                  <span className="d-block category-description fs-5">
                    Best Clothes For Men
                  </span>
                </div>
                <div className="position-absolute d-flex div-onhover m-3 top-0 align-items-center flex-column gap-3 justify-content-center z-1">
                  <span className="d-block category-name fs-2">Men</span>
                  <span className="z-2 text-white category-description text-center mx-3">
                    You wonderd how to show up to the wedding well have this on
                  </span>
                  <div className="gap-2 d-flex">
                    <button className="btn btn-danger rounded-pill add-cart">
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button className="btn btn-danger rounded-pill add-cart">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>{" "}
              <div className="col position-relative product-card ">
                <img
                  src="https://themewagon.github.io/hexashop/assets/images/baner-right-image-01.jpg"
                  alt=""
                  className="img-fluid w-100 "
                />
                <div className="position-absolute top-50 w-100 justify-content-center  text-center">
                  <span className="d-block category-name fs-2">Men</span>
                  <span className="d-block category-description fs-5">
                    Best Clothes For Men
                  </span>
                </div>
                <div className="position-absolute d-flex div-onhover m-3 top-0 align-items-center flex-column gap-3 justify-content-center z-1">
                  <span className="d-block category-name fs-2">Men</span>
                  <span className="z-2 text-white category-description text-center mx-3">
                    You wonderd how to show up to the wedding well have this on
                  </span>
                  <div className="gap-2 d-flex">
                    <button className="btn btn-danger rounded-pill add-cart">
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button className="btn btn-danger rounded-pill add-cart">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="row ">
              <div className="col position-relative product-card ">
                <img
                  src="https://themewagon.github.io/hexashop/assets/images/baner-right-image-01.jpg"
                  alt=""
                  className="img-fluid w-100 "
                />
                <div className="position-absolute top-50 w-100 justify-content-center  text-center">
                  <span className="d-block category-name fs-2">Men</span>
                  <span className="d-block category-description fs-5">
                    Best Clothes For Men
                  </span>
                </div>
                <div className="position-absolute d-flex div-onhover m-3 top-0 align-items-center flex-column gap-3 justify-content-center z-1">
                  <span className="d-block category-name fs-2">Men</span>
                  <span className="z-2 text-white category-description text-center mx-3">
                    You wonderd how to show up to the wedding well have this on
                  </span>
                  <div className="gap-2 d-flex">
                    <button className="btn btn-danger rounded-pill add-cart">
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button className="btn btn-danger rounded-pill add-cart">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>{" "}
              <div className="col position-relative product-card ">
                <img
                  src="https://themewagon.github.io/hexashop/assets/images/baner-right-image-01.jpg"
                  alt=""
                  className="img-fluid w-100 "
                />
                <div className="position-absolute top-50 w-100 justify-content-center  text-center">
                  <span className="d-block category-name fs-2">Men</span>
                  <span className="d-block category-description fs-5">
                    Best Clothes For Men
                  </span>
                </div>
                <div className="position-absolute d-flex div-onhover m-3 top-0 align-items-center flex-column gap-3 justify-content-center z-1">
                  <span className="d-block category-name fs-2">Men</span>
                  <span className="z-2 text-white category-description text-center mx-3">
                    You wonderd how to show up to the wedding well have this on
                  </span>
                  <div className="gap-2 d-flex">
                    <button className="btn btn-danger rounded-pill add-cart">
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button className="btn btn-danger rounded-pill add-cart">
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <div className="container">
            <div className="row my-5">
              <div className="col">
                <span className="category-name text-dark d-block fs-3">
                  Mens Latest
                </span>
                <span className="category-description text-secondary">
                  This will represent the description of the category
                </span>
              </div>
            </div>
            <div className="row align-items-center d-flex product-container">
              <div className="col-1">
                <button className="btn btn-danger " onClick={handlePrevClick}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              </div>
              <div className="col-3">
                <img
                  src="https://themewagon.github.io/hexashop/assets/images/men-02.jpg"
                  alt=""
                  className="img w-100"
                />
                <div className="justify-content-between d-flex">
                  <span className="category-name text-dark">Product Name</span>
                  <span className="category-name text-dark">*****</span>
                </div>
                <span className="product-header text-secondary">price</span>
              </div>{" "}
              <div className="col-3">
                <img
                  src="https://themewagon.github.io/hexashop/assets/images/men-02.jpg"
                  alt=""
                  className="img w-100"
                />
                <div className="justify-content-between d-flex">
                  <span className="category-name text-dark">Product Name</span>
                  <span className="category-name text-dark">*****</span>
                </div>
                <span className="product-header text-secondary">price</span>
              </div>{" "}
              <div className="col-3">
                <img
                  src="https://themewagon.github.io/hexashop/assets/images/men-02.jpg"
                  alt=""
                  className="img w-100"
                />
                <div className="justify-content-between d-flex">
                  <span className="category-name text-dark">Product Name</span>
                  <span className="category-name text-dark">*****</span>
                </div>
                <span className="product-header text-secondary">price</span>
              </div>
              <div className="col-1">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
