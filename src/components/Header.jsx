import { MdPersonOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const bagItems = useSelector((store) => store.bagItems);
  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            type="text"
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <MdPersonOutline />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <CiHeart />
            <span className="action_name">Wishlist</span>
          </div>

          <Link to="/Bag" className="action_container">
            <IoBagOutline />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bagItems.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
}
export default Header;
