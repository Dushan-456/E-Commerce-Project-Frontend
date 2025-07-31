import { useState } from "react";
import "../../index.css";
import "./CreditCardForm.css";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardName, setCardName] = useState("CARD HOLDER NAME");
  const [expiry, setExpiry] = useState("MM/YY");
  const [cvv, setCvv] = useState("XXX");
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className=" flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Credit Card */}
        <div className="w-full h-70  perspective">
          <div className={`card-3d w-full h-full ${isFlipped ? "card-flipped" : ""}`}>
            {/* Front */}
            <div className="card-front">
              <div className="h-full flex flex-col ">
                <div className="flex-1/2 ">

                </div>
                <div className="flex-1/2 flex flex-col justify-between  ">
                  <div className="text-2xl card-font text-center  tracking-widest">{cardNumber || "XXXX XXXX XXXX XXXX"}</div>

                  <div className=" flex items-center justify-center">

                    <span className="text-[0.7em] text-gray-400 leading-[1]">VALID <br /> THRU</span> <span className="text-md card-font ml-3" >{expiry || "MM/YY"}</span>
                  </div>
                  <div className=" flex">

                    <span className="text-[0.7em] text-gray-400 leading-[1]">CARD <br /> HOLDER</span> <span className="text-md ml-3 card-font" >{cardName || "CARD HOLDER NAME"}</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Back */}
            <div className="card-back ">
                    <div className=" flex items-center text-black h-full justify-center">

                    <span className="mb-7" >CVV</span> <span className="text-3xl ml-3 mb-7 " >{cvv || "•••"}</span>
                  </div>
            
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4 bg-white p-6 rounded-xl shadow-md">
          <div>
            <label className="block text-sm font-medium">Card Number</label>
            <input
              type="text"
              inputMode="numeric"      // Brings up number keypad on mobile
              pattern="\d*"            // Restricts to digits
              maxLength="19"           // Includes spaces (e.g., 1234 5678 9012 3456)
              className="w-full border px-3 py-2 rounded mt-1"
              
              onChange={(e) =>
                setCardNumber(
                  e.target.value
                    .replace(/\D/g, "")
                    .replace(/(\d{4})(?=\d)/g, "$1 ")
                    .substring(0, 19)
                )
              }
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Card Holder Name</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded mt-1"
              onChange={(e) => setCardName(e.target.value.toUpperCase())}
              placeholder="John Doe"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Expiry Date</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded mt-1"
                onChange={(e) =>
                  setExpiry(
                    e.target.value
                      .replace(/\D/g, "")
                      .replace(/(\d{2})(\d{0,2})/, "$1/$2")
                      .substring(0, 5)
                  )
                }
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">CVV</label>
              <input
                type="text"
                maxLength="3"
                className="w-full border px-3 py-2 rounded mt-1"
                onFocus={() => setIsFlipped(true)}
                onBlur={() => setIsFlipped(false)}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreditCardForm;