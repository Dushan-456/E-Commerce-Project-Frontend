import { Link } from "react-router-dom";
import "./ProductItem.css";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductItem = ({
   ProductID,
   ProductImgURL,
   ProductTitle,
   Price,
   Discount,
   ratings,
   itemSold,
}) => {
   return (
      <Link to={`/product/${ProductID}`}>
         <div className="product-card">
            <img
               className="product-img"
               src={ProductImgURL}
               alt={ProductTitle}
               style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "8px",
               }}
            />
            <p className="title w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
               {ProductTitle}
            </p>
            <p className="price">
               <span className="currency">LKR </span>
               {(Price * (100 - Discount)) / 100}.00{" "}
               <span className="old-price">{Price}.00</span>
               <span className="discount"> -{Discount}%</span>
            </p>

            <div>
               <Rating
                  name="half-rating-read"
                  defaultValue={ratings}
                  precision={0.1}
                  readOnly
                  size="small"
               />
               <span className="rate">{ratings}</span>
               <span className="sold"> | {itemSold}+ sold</span>
            </div>
            <Link to='/add2cart'>
            <button  className="fixed backdrop-blur-sm top-10 right-0 bg-[#ffffff80]  rounded-4xl p-2 z-50  hover:bg-black hover:text-white">
               <AddShoppingCartIcon />
            </button>
            </Link>
         </div>
      </Link>
   );
};

export default ProductItem;
