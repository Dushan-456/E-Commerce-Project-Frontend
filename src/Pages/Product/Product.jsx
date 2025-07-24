import ImagesGallery from "../../Components/SingleProductPage/ImagesGallery";
import ProductDetails from "../../Components/SingleProductPage/ProductDetails";
import "./Product.css";

const Product = () => {
   return (
      <div className="w-7xl m-auto">
         <div className="section1 flex ">
            <div className="flex-3/4">
               <div className=" flex">
                  <div className="images flex-2/5">
                     <h1>image</h1>
                     <ImagesGallery/>
                  </div>
                  <div className="flex-3/5 m-3">
                  <ProductDetails Price={25000} Discount={25}/>
                  </div>
               </div>
               <div className="h-80">
                  <h1>reviews</h1>
               </div>
            </div>
            <div className="bg-blue-600  flex-1/4">Right side
            <div className="m-7 h-78 sticky top-35 bg-amber-50"><h1>buy</h1></div>
            </div>
         </div>
      </div>
   );
};

export default Product;
