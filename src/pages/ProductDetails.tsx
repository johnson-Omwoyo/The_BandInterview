import { useLocation } from "react-router-dom";
import "./ProductDetails.css";
import { useState } from "react";

function ProductDetails() {
  const location = useLocation();

  const data = location.state?.data;
  console.log(data);

  const renderStars = (rating: number) => {
    const totalStars = 5;
    let filledStars = Math.round(rating);

    let stars = "";
    for (let i = 0; i < totalStars; i++) {
      stars += i < filledStars ? "★" : "☆";
    }
    return stars;
  };
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (operation: string) => {
    if (operation === "+") {
      setQuantity(quantity + 1);
    } else if (operation === "-" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row my-5 ">
        <div className="col position-relative p-0 ">
          <img
            src={data.image}
            className="img img-fluid w-100 page-head m-0"
          ></img>
          <div className="position-absolute top-50 w-100 justify-content-center  text-center">
            <span className="d-block category-name fs-2">{data.name}</span>
            <span className="d-block category-description fs-5">
              {data.description}
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container ">
            <div className="row me-5">
              <div className="col-12 col-md-7 me-5 ">
                <img className="w-100 page-head" src={data.image} alt="" />
              </div>
              <div className="col">
                <div className="justify-content-between d-flex">
                  <span className="category-name text-dark">{data.name}</span>
                  <span className="category-name text-dark">
                    {renderStars(data.rating)}
                  </span>
                </div>
                <span className="product-header text-secondary">
                  {data.price}
                </span>
                <hr />
                <p>{data.description}</p>
                <hr />
                <div className="d-flex align-items-center justify-content-around">
                  <span className="cat-name fs-3">No. Of Orders</span>
                  <div className="d-flex">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleQuantity("-")}
                    >
                      -
                    </button>
                    <div className="quantity-field p-2">{quantity}</div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleQuantity("+")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-around">
                  <span className="cat-name fs-3">
                    Total: {data.price * quantity}
                  </span>
                  <button className="btn btn-danger">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
