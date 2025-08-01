import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import CartSummary from "./CartSummary";
import CartProductItem from "./CartProductItem";
import CloseIcon from '@mui/icons-material/Close';

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "60vw",
   bgcolor: "background.paper",
   boxShadow: 24,
   p: 2,
};
const cartProducts = [
   {
      ProductID: 1,
      ProductImgURL:
         "https://img.freepik.com/free-photo/smartwatch-digital-device_53876-96804.jpg?w=740",
      ProductTitle:
         "Apple Watchddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      Price: 12500,
      Discount: 12,
      ratings: 1.5,
      itemSold: 2500,
   },
   {
      ProductID: 2,
      ProductImgURL:
         "https://img.freepik.com/free-photo/wireless-headphones-digital-device_53876-96810.jpg?w=740",
      ProductTitle: "Wireless Headphones",
      Price: 8900,
      Discount: 20,
      ratings: 2.2,
      itemSold: 3100,
   },
   {
      ProductID: 3,
      ProductImgURL:
         "https://img.freepik.com/free-photo/laptop-digital-device_53876-96802.jpg?w=740",
      ProductTitle: "Dell Inspiron Laptop",
      Price: 175000,
      Discount: 10,
      ratings: 4.7,
      itemSold: 1200,
   },
   {
      ProductID: 4,
      ProductImgURL:
         "https://img.freepik.com/free-photo/cosmetic-beauty-product-makeup_53876-96813.jpg?w=740",
      ProductTitle: "Beauty Cream",
      Price: 2250,
      Discount: 18,
      ratings: 5,
      itemSold: 980,
   }
]

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
               <h3 className="text-center font-bold text-3xl">CART</h3>
               <hr />
               <div className="flex items-center justify-between ">
                  <div className=" h-[60vh] custom-scroll overflow-y-scroll flex-2/3">
                     {cartProducts.map(({
                        ProductImgURL,
                        ProductTitle,
                        Price,
                        Discount,
                        ratings,
                        itemSold,
                     }, index) => (
                        <CartProductItem
                           key={index}
                           ProductImgURL={ProductImgURL}
                           ProductTitle={ProductTitle}
                           Price={Price}
                           Discount={Discount}
                           ratings={ratings}
                           itemSold={itemSold}
                        />

                     ))

                     }

                  </div>
                  <div className="pl-5 flex-1/3">
                     <IconButton
                        onClick={handleClose}
                        style={{ position: 'fixed', top: '0', right: '0' }}
                        color="inherit">
                        <CloseIcon style={{ fontSize: "30px", color: 'red' }} />
                     </IconButton>
                     <CartSummary handleClose={handleClose} />
                  </div>
               </div>
            </Box>
         </Modal>
      </div>
   );
};

export default Cart;
