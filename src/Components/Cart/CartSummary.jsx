import Button from "@mui/material/Button";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";

const CartSummary = ({ handleClose }) => {

   const navigate = useNavigate()

   const handleCheckout = () => {
      handleClose();
      navigate("/checkout");
   };

   return (
      <div
         className="flex flex-col gap-5 rounded-xl h-full p-5"
         style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
         <div className="flex pt-2 items-center justify-between">
            <h3 className="font-bold">clickSTORE</h3>
            <StorefrontIcon />
         </div>
         <div className="flex  items-center justify-between">
            <p className="text-[0.9em]">Items Total</p>
            <p>LKR 7800.00</p>
         </div>
         <div className="flex mt-[-20px] items-center justify-between">
            <p className="text-[0.9em]">Items Discount</p>
            <p className="text-red-600">- LKR 800.00</p>
         </div>
         <div className="flex mt-[-20px] items-center justify-between">
            <p className="text-[0.9em]">Sub Total</p>
            <p>LKR 7000.00</p>
         </div>
         <div className="flex mt-[-20px] items-center justify-between">
            <p className="text-[0.9em]">Shipping</p>
            <p>LKR 300.00</p>
         </div>
         <hr />
         <div className="flex pt-2 items-center justify-between">
            <p className="font-bold">Estimated Total</p>

            <p className="font-bold text-xl">
               <span className="font-normal text-sm">LKR</span> 7300.00
            </p>
         </div>

         <hr />

         <div className="">
            <Button onClick={handleCheckout} variant="contained" className="w-full !bg-red-500 !mb-3" startIcon={<ShoppingBasketIcon />} >
               Checkout
            </Button>
         </div>
      </div>
   );
};

export default CartSummary;
