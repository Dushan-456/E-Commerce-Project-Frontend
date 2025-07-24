import "./ProductDetails.css";
const ProductDetails = ({ Price, Discount }) => {
   return (
      <div>
         <div className="bg-orange-600 p-1 text-white font-bold">
            <h4>Welcome Deal</h4>
         </div>
         <h3 className="product-price">
            <span className="currency">LKR </span>
            {(Price * (100 - Discount)) / 100}.00{" "}
            <span className="product-old-price">{Price}.00</span>
            <span className="product-discount"> -{Discount}% OFF</span>
         </h3>
         <span className="small-texts">Tax excluded, add at checkout if applicable</span>
         <hr />
      </div>
   );
};

export default ProductDetails;
