// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Ads.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AdsElement = [
   {
      imgURL:
         "https://naldzgraphics.net/wp-content/uploads/2011/10/coca-cola.ads.jpg",
   },
   {
      imgURL:
         "https://mattoni.ba/wp-content/uploads/2024/02/Pepsi_banner-t.jpeg",
   },
   {
      imgURL:
         "https://images.squarespace-cdn.com/content/v1/54ec2161e4b01dbc251cbdae/8109841b-663b-476b-beee-e72bd234ee95/best-ideas-For-Successful-Banner-Advertising-30.jpg",
   },
   {
      imgURL:
         "https://www.picmaker.com/blog/wp-content/uploads/2022/06/Facebook-Food-Ad-Template-Blog-Banner.jpeg",
   },
   {
      imgURL:
         "https://naldzgraphics.net/wp-content/uploads/2011/10/coca-cola.ads.jpg",
   },
   {
      imgURL:
         "https://naldzgraphics.net/wp-content/uploads/2011/10/coca-cola.ads.jpg",
   },
];

const Ads = () => {
   return (
      <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
         }}
         pagination={{
            clickable: true,
         }}
         navigation={false}
         modules={[Autoplay, Pagination, Navigation]}>
         {AdsElement.map(({ imgURL }, index) => (
            <SwiperSlide key={index}>
               <AdBanner imgURL={imgURL} id={index} />
            </SwiperSlide>
         ))}
      </Swiper>
   );
};

export default Ads;

const AdBanner = ({ imgURL, id }) => (
   <img className="ads-banner" src={imgURL} alt={`ad${id}`} />
);
