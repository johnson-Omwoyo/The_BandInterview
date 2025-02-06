import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();

  const data = location.state?.data;
  console.log(data);

  return <div>Product details</div>;
}

export default ProductDetails;
