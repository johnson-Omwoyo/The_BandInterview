import { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  interface Offer {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    discountPercentage: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
    rating: number;
    offerEndDate: string;
  }
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
    rating: number;
  }

  const [offers, setOffers] = useState<Offer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const filterProducts = (products: Product[], category: string) => {
    return products.filter((product) => product.category === category);
  };
  console.log(products);

  useEffect(() => {
    const baseUrl = "http://localhost:3000";
    const fetchOffers = async () => {
      try {
        const response = await fetch(`${baseUrl}/offers`);
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.log("Error fetching offers:", error);
      }
    };
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${baseUrl}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchOffers();
    fetchProducts();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="container-fluid my-4">
      <div className="row my-2">
        <div className="col-12 col-md-6 position-relative">
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
        <div className="col-12 col-md-6">
          <div className="container-fluid ">
            <div className="row mb-4">
              {offers ? (
                offers.map((offer) => (
                  <div className="col-6 position-relative product-card my-3 ">
                    <img
                      src="https://themewagon.github.io/hexashop/assets/images/baner-right-image-01.jpg"
                      alt=""
                      className="img-fluid w-100 "
                    />
                    <div className="position-absolute top-50 w-100 justify-content-center  text-center">
                      <span className="d-block category-name fs-2">
                        {offer.name}
                      </span>
                      <span className="d-block category-description fs-5">
                        {offer.description}
                      </span>
                    </div>
                    <div className="position-absolute d-flex div-onhover m-3 top-0 align-items-center flex-column gap-3 justify-content-center z-1">
                      <span className="d-block category-name fs-2">
                        {offer.name}
                      </span>
                      <span className="z-2 text-white category-description text-center mx-3">
                        {offer.description}
                      </span>
                      <div className="gap-2 d-flex">
                        <button className="btn btn-danger rounded-pill add-cart">
                          <i className="fa-solid fa-cart-plus"></i>
                        </button>
                        <button
                          className="btn btn-danger rounded-pill add-cart"
                          onClick={() =>
                            navigate("/details", { state: { data: "data" } })
                          }
                        >
                          <i className="fa-solid fa-eye"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>no offers</h1>
              )}
            </div>
          </div>
        </div>{" "}
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
                <button className="btn btn-danger " onClick={() => {}}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              </div>
              {filterProducts(products, "Men's Clothes") ? (
                filterProducts(products, "Men's Clothes").map((product) => (
                  <div className="col-3">
                    <img src={product.image} alt="" className="img w-100" />
                    <div className="justify-content-between d-flex">
                      <span className="category-name text-dark">
                        {product.name}
                      </span>
                      <span className="category-name text-dark">*****</span>
                    </div>
                    <span className="product-header text-secondary">
                      {product.price}
                    </span>
                  </div>
                ))
              ) : (
                <h1>no products</h1>
              )}

              <div className="col-1">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>{" "}
            <div className="row my-5">
              <div className="col">
                <span className="category-name text-dark d-block fs-3">
                  Women's Latest
                </span>
                <span className="category-description text-secondary">
                  This will represent the description of the category
                </span>
              </div>
            </div>
            <div className="row align-items-center d-flex product-container">
              <div className="col-1">
                <button className="btn btn-danger " onClick={() => {}}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              </div>
              {filterProducts(products, "Women's Clothes") ? (
                filterProducts(products, "Women's Clothes").map((product) => (
                  <div className="col-3">
                    <img src={product.image} alt="" className="img w-100" />
                    <div className="justify-content-between d-flex">
                      <span className="category-name text-dark">
                        {product.name}
                      </span>
                      <span className="category-name text-dark">*****</span>
                    </div>
                    <span className="product-header text-secondary">
                      {product.price}
                    </span>
                  </div>
                ))
              ) : (
                <h1>no products</h1>
              )}

              <div className="col-1">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>{" "}
            <div className="row my-5">
              <div className="col">
                <span className="category-name text-dark d-block fs-3">
                  Kids Latest
                </span>
                <span className="category-description text-secondary">
                  This will represent the description of the category
                </span>
              </div>
            </div>
            <div className="row align-items-center d-flex product-container">
              <div className="col-1">
                <button className="btn btn-danger " onClick={() => {}}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              </div>
              {filterProducts(products, "Kids") ? (
                filterProducts(products, "Kids").map((product) => (
                  <div className="col-3">
                    <img src={product.image} alt="" className="img w-100" />
                    <div className="justify-content-between d-flex">
                      <span className="category-name text-dark">
                        {product.name}
                      </span>
                      <span className="category-name text-dark">*****</span>
                    </div>
                    <span className="product-header text-secondary">
                      {product.price}
                    </span>
                  </div>
                ))
              ) : (
                <h1>no products</h1>
              )}

              <div className="col-1">
                <button className="btn btn-danger">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>{" "}
            <div className="row my-5">
              <div className="col">
                <span className="category-name text-dark d-block fs-3">
                  Jewelery{" "}
                </span>
                <span className="category-description text-secondary">
                  This will represent the description of the category
                </span>
              </div>
            </div>
            <div className="row align-items-center d-flex product-container">
              <div className="col-1">
                <button className="btn btn-danger " onClick={() => {}}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              </div>
              {filterProducts(products, "Jewelry") ? (
                filterProducts(products, "Jewelry").map((product) => (
                  <div className="col-3">
                    <img src={product.image} alt="" className="img w-100" />
                    <div className="justify-content-between d-flex">
                      <span className="category-name text-dark">
                        {product.name}
                      </span>
                      <span className="category-name text-dark">*****</span>
                    </div>
                    <span className="product-header text-secondary">
                      {product.price}
                    </span>
                  </div>
                ))
              ) : (
                <h1>no products</h1>
              )}

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
