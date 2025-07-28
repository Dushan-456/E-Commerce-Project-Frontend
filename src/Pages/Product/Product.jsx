import ImagesGallery from "../../Components/SingleProductPage/ImagesGallery";
import ProductDetails from "../../Components/SingleProductPage/ProductDetails";
import StickyCard from "../../Components/SingleProductPage/StickyCard";
import "./Product.css";

const Product = () => {
   return (
      <div className="w-7xl m-auto pt-10">
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
            <div className="pt-9  flex-1/4">
            <div className="h-120 sticky top-35 rounded-xl" style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
               <StickyCard/>
            </div>
            </div>
         </div>
      </div>
   );
};

export default Product;
