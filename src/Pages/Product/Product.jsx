import ImagesGallery from "../../Components/SingleProductPage/ImagesGallery";
import ProductDetails from "../../Components/SingleProductPage/ProductDetails";
import "./Product.css";

const Product = () => {
   return (
      <div className="w-7xl m-auto">
         <div className="section1 mt-3 flex ">
            <div className="flex-3/4">
               <div className=" flex mb-5">
                  <div className="images flex-2/5">
                     <ImagesGallery/>
                  </div>
                  <div className="flex-3/5 m-3">
                  <ProductDetails Price={25000} Discount={25}/>
                  </div>
               </div>
               <hr />
               <div className="h-80">
                  <h1>reviews</h1>
               </div>
            </div>
            <div className="  flex-1/4">
            <div className="m-7 h-78 sticky top-35 bg-blue-600"><h1>buy</h1></div>
            </div>
         </div>
      </div>
   );
};

export default Product;
