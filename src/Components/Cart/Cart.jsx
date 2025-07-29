import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import CartSummary from "./CartSummary";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "60vw",
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

const Cart = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <div>
         <div className="cart">
            <IconButton
               onClick={handleOpen}
               style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
               size="large"
               color="inherit">
               <Badge badgeContent={4} color="error">
                  <LocalMallIcon style={{ fontSize: "32px" }} />
               </Badge>
            </IconButton>
         </div>
         <Modal
            className="backdrop-blur-sm"
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
               <div className="flex items-center justify-between ">
                  <div className="bg-amber-800 h-[60vh]">
                     <h1>left side</h1>
                  </div>
                  <div>
                     <CartSummary />
                  </div>
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default Cart;
