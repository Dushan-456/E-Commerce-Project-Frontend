import Radio from "@mui/material/Radio";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CreditCardForm from "./CreditCardForm";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import cardPayment from '../../assets/Images/card-payment.png'
import cashOnDelivery from '../../assets/Images/cash-on-delivery.png'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';


const PaymentMethods = () => {
   const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "auto",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 2,
   };

   const [selectedValue, setSelectedValue] = useState("cash-on-delivery");

   const handleChange = (event) => {
      setSelectedValue(event.target.value);
   };

   const [show, setShow] = useState(false);

   useEffect(() => {
      if (selectedValue === "card-payment") {
         setShow(true);
         setOpen(true);
      } else {
         setShow(false);
         setOpen(false);
      }
   }, [selectedValue]);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);


   useEffect(() => {
      if (show) {
         handleOpen();
      }
   }, [show]);
   return (
      <div
         className="flex flex-col gap-5 rounded-xl !mt-10 p-5"
         style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
         <h2 className="text-xl font-bold">Payment Methods</h2>
         <div>
            {/* Card Payment Option */}
            <div
               onClick={() => setSelectedValue("card-payment")}
               className={` border mb-2 rounded-xl p-2 cursor-pointer 
         ${selectedValue === "card-payment" ? "border-blue-500" : "border-gray-300"}`}>
               <div className="flex items-center">
                  <Radio
                     checked={selectedValue === "card-payment"}
                     onChange={handleChange}
                     value="card-payment"
                     name="radio-buttons"
                  />
                  <CreditCardIcon />
                  <h1 className="ml-2">Card Payment</h1>

               </div>
               <div>
                  <img className="h-5 pl-10" src={cardPayment} alt="Card Payments" />
               </div>
            </div>

            {/* Modal for Card Payment */}
            <Modal
               className="backdrop-blur-sm"
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
               <Box sx={style}>
                  <h3 className="text-center font-bold text-3xl">Add New Card</h3>
                  <IconButton
                     onClick={handleClose}
                     style={{ position: "fixed", top: "0", right: "0" }}
                     color="inherit">
                     <CloseIcon style={{ fontSize: "30px", color: "red" }} />
                  </IconButton>

                  <CreditCardForm />
               </Box>
            </Modal>

            {/* Cash On Delivery Option */}
            <div
               onClick={() => setSelectedValue("cash-on-delivery")}
               className={`f border rounded-xl p-2 cursor-pointer 
         ${selectedValue === "cash-on-delivery" ? "border-blue-500" : "border-gray-300"}`}>
               <div className="flex items-center">
                  <Radio
                     checked={selectedValue === "cash-on-delivery"}
                     onChange={handleChange}
                     value="cash-on-delivery"
                     name="radio-buttons"
                  />
                  <LocalAtmIcon />

                  <h1 className="ml-2">Cash on Delivery</h1>

               </div>
               <div>
                  <img className="h-5 pl-10" src={cashOnDelivery} alt="Card Payments" />
               </div>
            </div>
         </div>

      </div>
   );
};

export default PaymentMethods;
