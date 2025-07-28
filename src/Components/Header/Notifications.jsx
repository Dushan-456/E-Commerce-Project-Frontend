import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import msgImg from "../../assets/images/Icons/msg.png";
import orderImg from "../../assets/images/Icons/order.png";
import promotionImg from "../../assets/images/Icons/promotion.png";
import settingImg from "../../assets/images/Icons/settings.webp";
import placeholder from "../../assets/images/placeholder.jpg";

const initialNotifications = [
   {
      notificationID: "1",
      NotificationType: "order",
      NotificationTitle: "Your order #12345 has been shipped!",
      timestamp: "2025-07-24T14:00:00Z",
      read: false,
   },
   {
      notificationID: "2",
      NotificationType: "msg",
      NotificationTitle: "New message from Admin",
      timestamp: "2025-07-24T13:30:00Z",
      read: false,
   },
   {
      notificationID: "3",
      NotificationType: "promotion",
      NotificationTitle: "Item back in stock: MacBook Pro M2",
      timestamp: "2025-07-24T12:00:00Z",
      read: true,
   },
   {
      notificationID: "3",
      NotificationType: "settings",
      NotificationTitle: "Update profile details",
      timestamp: "2025-07-24T12:00:00Z",
      read: true,
   },
];

const getRelativeTime = (timestamp) => {
   const now = new Date();
   const past = new Date(timestamp);
   const diff = Math.floor((now - past) / 1000);

   if (diff < 60) return `${diff}s ago`;
   if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
   if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
   return `${Math.floor(diff / 86400)}d ago`;
};

const Notifications = () => {
   const [open, setOpen] = useState(false);
   const [notis, setNotis] = useState(initialNotifications);
   const dropdownRef = useRef(null);
   const navigate = useNavigate();

   const handleNotificationsClick = (id) => {
      setOpen(false);

      // Mark as read
      setNotis((prev) =>
         prev.map((noti) =>
            noti.notificationID === id ? { ...noti, read: true } : noti
         )
      );

      navigate(`/notifications/${id}`);
   };

   const unreadCount = notis.filter((n) => !n.read).length;

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
         ) {
            setOpen(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
         document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   return (
      <div className="relative inline-block text-left" ref={dropdownRef}>
         <IconButton color="inherit" onClick={() => setOpen(!open)}>
            <Badge badgeContent={unreadCount} color="error">
               <NotificationsIcon style={{ fontSize: "30px" }} />
            </Badge>
         </IconButton>

         {open && (
            <div className="custom-scroll p-2 absolute right-0 z-50 mt-2 w-80 max-h-[80vh] overflow-y-scroll bg-white border border-gray-200 rounded-md shadow-lg">
               {notis.length === 0 ? (
                  <div className="px-4 py-3 text-gray-500">
                     No notifications
                  </div>
               ) : (
                  notis.map((noti) => (
                     <button
                        key={noti.notificationID}
                        onClick={() =>
                           handleNotificationsClick(noti.notificationID)
                        }
                        className={`flex items-start w-full text-left px-4 mb-1 py-3 rounded-md hover:bg-blue-200 ${
                           !noti.read ? "bg-blue-100" : ""
                        }`}>
                        <img
                           src={
                              noti.NotificationType === "order"
                                 ? orderImg
                                 : noti.NotificationType === "msg"
                                 ? msgImg
                                 : noti.NotificationType === "promotion"
                                 ? promotionImg
                                 : noti.NotificationType === "settings"
                                 ? settingImg
                                 : placeholder
                           }
                           alt={noti.NotificationType}
                           className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="flex-1">
                           <p
                              className={`text-sm ${
                                 !noti.read
                                    ? "font-semibold text-gray-800"
                                    : "text-gray-700"
                              }`}>
                              {noti.NotificationTitle}
                           </p>
                           <p className="text-xs text-gray-500 mt-1">
                              {getRelativeTime(noti.timestamp)}
                           </p>
                        </div>
                     </button>
                  ))
               )}
            </div>
         )}
      </div>
   );
};

export default Notifications;
