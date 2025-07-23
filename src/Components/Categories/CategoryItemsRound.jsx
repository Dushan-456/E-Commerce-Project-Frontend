// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination"; 
import { Grid, Mousewheel } from "swiper/modules";
import { Link } from "react-router-dom";


const categoryitems = [
  {
    CategoryID: 1,
    CategoryImgURL: "https://img.freepik.com/free-photo/smartwatch-digital-device_53876-96804.jpg?w=740",
    CategoryTitle: "SmartWatches",
  },
  {
    CategoryID: 2,
    CategoryImgURL: "https://img.freepik.com/free-photo/modern-smartphone-digital-device_53876-96811.jpg?w=740",
    CategoryTitle: "Smartphones",
  },
  {
    CategoryID: 3,
    CategoryImgURL: "https://img.freepik.com/free-photo/gaming-laptop-setup_53876-141229.jpg?w=740",
    CategoryTitle: "Laptops",
  },
  {
    CategoryID: 4,
    CategoryImgURL: "https://img.freepik.com/free-photo/headphones-wireless-digital-device_53876-96809.jpg?w=740",
    CategoryTitle: "Headphones",
  },
  {
    CategoryID: 5,
    CategoryImgURL: "https://img.freepik.com/free-photo/modern-tv-screen-mockup_53876-102662.jpg?w=740",
    CategoryTitle: "Televisions",
  },
  {
    CategoryID: 6,
    CategoryImgURL: "https://img.freepik.com/free-photo/digital-photo-camera_53876-96807.jpg?w=740",
    CategoryTitle: "Cameras",
  },
  {
    CategoryID: 7,
    CategoryImgURL: "https://img.freepik.com/free-photo/digital-tablet-pen_53876-96814.jpg?w=740",
    CategoryTitle: "Tablets",
  },
  {
    CategoryID: 8,
    CategoryImgURL: "https://img.freepik.com/free-photo/speaker-product-mockup_53876-96816.jpg?w=740",
    CategoryTitle: "Speakers",
  },
  {
    CategoryID: 9,
    CategoryImgURL: "https://img.freepik.com/free-photo/gaming-console-controller_53876-96812.jpg?w=740",
    CategoryTitle: "Gaming Consoles",
  },
  {
    CategoryID: 10,
    CategoryImgURL: "https://img.freepik.com/free-photo/modern-home-appliances_53876-94851.jpg?w=740",
    CategoryTitle: "Home Appliances",
  },
  {
    CategoryID: 11,
    CategoryImgURL: "https://img.freepik.com/free-photo/white-sneakers_53876-96801.jpg?w=740",
    CategoryTitle: "Footwear",
  },
  {
    CategoryID: 12,
    CategoryImgURL: "https://img.freepik.com/free-photo/women-fashion-clothes_53876-96819.jpg?w=740",
    CategoryTitle: "Women's Fashion",
  },
  {
    CategoryID: 13,
    CategoryImgURL: "https://img.freepik.com/free-photo/men-fashion-clothes_53876-96820.jpg?w=740",
    CategoryTitle: "Men's Fashion",
  },
  {
    CategoryID: 14,
    CategoryImgURL: "https://img.freepik.com/free-photo/kids-clothes-toys_53876-96822.jpg?w=740",
    CategoryTitle: "Kids & Baby",
  },
  {
    CategoryID: 15,
    CategoryImgURL: "https://img.freepik.com/free-photo/beauty-products_53876-96824.jpg?w=740",
    CategoryTitle: "Beauty & Personal Care",
  },
  {
    CategoryID: 16,
    CategoryImgURL: "https://img.freepik.com/free-photo/fruits-vegetables-basket_53876-96825.jpg?w=740",
    CategoryTitle: "Groceries",
  },
  {
    CategoryID: 17,
    CategoryImgURL: "https://img.freepik.com/free-photo/sports-fitness-equipment_53876-96827.jpg?w=740",
    CategoryTitle: "Fitness & Sports",
  },
  {
    CategoryID: 18,
    CategoryImgURL: "https://img.freepik.com/free-photo/home-decor_53876-96829.jpg?w=740",
    CategoryTitle: "Home Decor",
  },
  {
    CategoryID: 19,
    CategoryImgURL: "https://img.freepik.com/free-photo/furniture-chair-table_53876-96831.jpg?w=740",
    CategoryTitle: "Furniture",
  },
  {
    CategoryID: 20,
    CategoryImgURL: "https://img.freepik.com/free-photo/kitchenware-cookware_53876-96833.jpg?w=740",
    CategoryTitle: "Kitchenware",
  },
  {
    CategoryID: 21,
    CategoryImgURL: "https://img.freepik.com/free-photo/car-accessories_53876-96835.jpg?w=740",
    CategoryTitle: "Car Accessories",
  },
  {
    CategoryID: 22,
    CategoryImgURL: "https://img.freepik.com/free-photo/pet-food-accessories_53876-96837.jpg?w=740",
    CategoryTitle: "Pet Supplies",
  },
  {
    CategoryID: 23,
    CategoryImgURL: "https://img.freepik.com/free-photo/book-library_53876-96839.jpg?w=740",
    CategoryTitle: "Books",
  },
  {
    CategoryID: 24,
    CategoryImgURL: "https://img.freepik.com/free-photo/toys-stuffed-animals_53876-96841.jpg?w=740",
    CategoryTitle: "Toys",
  },
  {
    CategoryID: 25,
    CategoryImgURL: "https://img.freepik.com/free-photo/stationery-office-supplies_53876-96843.jpg?w=740",
    CategoryTitle: "Stationery",
  },
  {
    CategoryID: 26,
    CategoryImgURL: "https://img.freepik.com/free-photo/tools-hardware_53876-96845.jpg?w=740",
    CategoryTitle: "Tools & Hardware",
  },
  {
    CategoryID: 27,
    CategoryImgURL: "https://img.freepik.com/free-photo/cleaning-supplies_53876-96847.jpg?w=740",
    CategoryTitle: "Cleaning Supplies",
  },
  {
    CategoryID: 28,
    CategoryImgURL: "https://img.freepik.com/free-photo/baby-products_53876-96849.jpg?w=740",
    CategoryTitle: "Baby Products",
  },
  {
    CategoryID: 29,
    CategoryImgURL: "https://img.freepik.com/free-photo/lighting-lamps_53876-96851.jpg?w=740",
    CategoryTitle: "Lighting",
  },
  {
    CategoryID: 30,
    CategoryImgURL: "https://img.freepik.com/free-photo/music-instruments_53876-96853.jpg?w=740",
    CategoryTitle: "Musical Instruments",
  },
];



const CategoryItemsRound = () => {
  return (
    <section className="mt-5">
                 <Swiper
            slidesPerView={10}
            grid={{
               rows: 1,
            }}
            spaceBetween={10}
            pagination={{
               clickable: false,
            }}
            mousewheel={true}
            modules={[Grid , Mousewheel]}>
                <SwiperSlide>
                <CategoryItems/>
                </SwiperSlide>
         {categoryitems.map(
            ({
               CategoryID,
               CategoryImgURL,
               CategoryTitle
             
            },
            index)=>(
                <SwiperSlide key={index}>
                    <CategoryItems
                    CategoryID={CategoryID}
                  CategoryImgURL={CategoryImgURL}
                  CategoryTitle={CategoryTitle}
               />
                </SwiperSlide>
            )
         )}
         </Swiper>
      
    </section>
  )
}

export default CategoryItemsRound


const  CategoryItems = ({CategoryID,CategoryImgURL,CategoryTitle})=>(
    <Link to={`/category/${CategoryID}`}>
    
    <div className="flex flex-col items-center justify-center" >
        <img style={{borderRadius:100, height:90 , width: 90 , objectFit: 'cover'}} src={CategoryImgURL} alt={CategoryTitle} />
    <p className="text-center  leading-[1]"> {CategoryTitle}</p>
    </div>
    </Link>
)