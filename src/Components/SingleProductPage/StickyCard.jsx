import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
const StickyCard = () => {
   const [qty, setQty] = useState(1);

   const qtyIncrease = () => {
      setQty((prevQty) => prevQty + 1);
   };
   const qtyDecrease = () => {
  setQty(prevQty => (prevQty > 1 ? prevQty - 1 : 1));
};
   return (
      <div className="flex flex-col gap-5 h-full m-4">
         <h1>buy</h1>
         <hr />
         <h2 className="font-bold text-center">Quantity</h2>
         <div className="flex gap-5 justify-center items-center">
            <button onClick={qtyDecrease} className="bg-gray-100 rounded-4xl cursor-pointer">
               <RemoveIcon />
            </button>
            <span className="font-bold">{qty}</span>
            <button onClick={qtyIncrease} className="bg-gray-100 rounded-4xl cursor-pointer">
               <AddIcon />
            </button>
         </div>
         <div className="">
            <Button variant="contained" className="w-full !bg-red-500 !mb-3">
               Buy Now
            </Button>
            <Button variant="outlined" className="w-full">
               Add to Cart
            </Button>
         </div>
         <div className="flex items-center justify-between pb-4 ">
            <Button
               variant="outlined"
               className="w-1/2 !ml-2 !border-0  !bg-gray-100"
               startIcon={<ShareIcon />}>
               Share
            </Button>
            <Button
               variant="outlined"
               className="w-1/2 !ml-2 !border-0  !bg-gray-100"
               startIcon={<FavoriteBorderIcon />}>
               4568
            </Button>
         </div>
      </div>
   );
};

export default StickyCard;
