import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton, Rating } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartProductItem = () => {
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
         <div className="flex items-start">
            <img
               className="rounded-xl"
               width={110}
               height={110}
               src="https://ae-pic-a1.aliexpress-media.com/kf/S03c90a4640444a0a9677de41a99355ee3.jpeg_220x220q75.jpeg_.avif"
               alt=""
            />
            <div className="pl-5">
               <p className="font-bold leading-[1.2]  text-zinc-500">
                  99 Speed Professional Muscle Massage Gun Massager Massager for
                  Neck and Back Massage Instrument Dropshipping Fitness
                  Equipment
               </p>
               <div>
                  <Rating
                     name="half-rating-read"
                     defaultValue={5}
                     precision={0.1}
                     readOnly
                     size="small"
                  />{" "}
                  <span>4.5 </span>
               </div>
               <hr />
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
                        LKR 2000.00{" "}
                        <span className="font-normal text-[0.8em] line-through text-red-700">
                           3000.00
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
                     <p className="font-bold m-[-5px]">LKR 2000</p>
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
