import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Company Information */}
          <div className="col-md-4">
            <h5>Company Information</h5>
            <p>
              <strong>MyCompany Inc.</strong>
              <br />
              ClickCart is your one-stop online shop for stylish and affordable
              clothing, offering a wide range of trendy outfits for every
              occasion. Shop from the comfort of your home and enjoy fast
              delivery right to your doorstep!
            </p>
            
          </div>

          {/* Contact Details */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Email:</strong> contact@clickcart.com
              </li>
              <li>
                <strong>Phone:</strong> +254 708258617{" "}
              </li>
              <li>
                <strong>Address:</strong> Kalio,selep flats, floor 12
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div>
              <a href="https://www.facebook.com" className="text-white me-3">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" className="text-white me-3">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" className="text-white me-3">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" className="text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            {" "}
            <p>&copy; 2025 MyCompany. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
