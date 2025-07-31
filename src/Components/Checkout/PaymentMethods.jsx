import Radio from "@mui/material/Radio";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CreditCardForm from "./CreditCardForm";

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
   return (
      <div
         className="flex flex-col gap-5 rounded-xl !mt-10 p-5"
         style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}>
         <h2 className="text-xl font-bold">Payment Methods</h2>
         <div>
            <div>
               <Radio
                  checked={selectedValue === "card-payment"}
                  onChange={handleChange}
                  value="card-payment"
                  name="radio-buttons"
               />
            </div>
            {show && handleOpen}

            <Modal
               className="backdrop-blur-sm"
               open={open}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
               <Box sx={style}>
                  <h3 className="text-center font-bold text-3xl">
                     Add New Card
                  </h3>
                  <IconButton
                     onClick={handleClose}
                     style={{ position: "fixed", top: "0", right: "0" }}
                     color="inherit">
                     <CloseIcon style={{ fontSize: "30px", color: "red" }} />
                  </IconButton>

                  <CreditCardForm />
               </Box>
            </Modal>

            <Radio
               checked={selectedValue === "cash-on-delivery"}
               onChange={handleChange}
               value="cash-on-delivery"
               name="radio-buttons"
            />
            <div></div>
         </div>
      </div>
   );
};

export default PaymentMethods;
