import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton, Rating } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartProductItem = ({
   ProductImgURL,
   ProductTitle,
   Price,
   Discount,
   ratings,
}) => {
   const SalePrice = ((Price * (100 - Discount)) / 100).toFixed(2)
   const [qty, setQty] = useState(1);

   const qtyIncrease = () => {
      setQty((prevQty) => prevQty + 1);
   };
   const qtyDecrease = () => {
      setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
   };
   return (
      <div
         className=" rounded-xl  p-2 m-2 mb-10 h-min "
         style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
         <div className="flex items-start  ">
            <img
               className="rounded-xl object-cover w-[120px] h-[120px] "

               src={ProductImgURL}
               alt={ProductTitle}
            />
            <div className="pl-5 pr-2  w-full overflow-hidden">
               <p className="font-bold leading-[1.2]  text-zinc-500">{ProductTitle}
               </p>
               <div>
                  <Rating
                     name="half-rating-read"
                     defaultValue={ratings}
                     precision={0.1}
                     readOnly
                     size="small"
                  />{" "}
                  <span>4.5 </span>
               </div>

               <div className=" flex items-center justify-between pt-2">
                  <div className="text-[0.7em]">
                     <span>Colour : Red</span>
                     {"  |  "}
                     <span>Size : Large</span>
                  </div>
                  <div></div>
               </div>

               <div className=" flex items-center justify-between">
                  <div>
                     <p className="text-center text-[0.8em]">Price</p>
                     <p className="font-bold m-[-5px]">
                        LKR {SalePrice}.00{" "}
                        <span className="font-normal text-[0.8em] line-through text-red-700">
                           {Price}.00
                        </span>
                     </p>
                  </div>
                  <div className="flex gap-5 justify-center items-center">
                     <button
                        onClick={qtyDecrease}
                        className="bg-gray-100 rounded-4xl cursor-pointer">
                        <RemoveIcon />
                     </button>
                     <span className="font-bold">{qty}</span>
                     <button
                        onClick={qtyIncrease}
                        className="bg-gray-100 rounded-4xl cursor-pointer">
                        <AddIcon />
                     </button>
                  </div>
                  <div>
                     <p className="text-center text-[0.8em]">Total</p>
                     <p className="font-bold m-[-5px]">LKR {SalePrice * qty}.00</p>
                  </div>
               </div>
            </div>
            <IconButton color="inherit">
               <DeleteOutlineIcon style={{ fontSize: "30px", color: "red" }} />
            </IconButton>
         </div>
      </div>
   );
};

export default CartProductItem;
