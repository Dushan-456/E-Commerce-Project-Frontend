import { useState } from "react";
import "../../index.css"; 

const  CreditCardForm = ()=> {
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardName, setCardName] = useState("FULL NAME");
  const [expiry, setExpiry] = useState("MM/YY");
  const [cvv, setCvv] = useState("XXX");
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className=" flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6">
        {/* Credit Card */}
        <div className="w-full h-52 perspective">
          <div className={`card-3d w-full h-full ${isFlipped ? "card-flipped" : ""}`}>
            {/* Front */}
            <div className="card-front bg-gradient-to-r from-indigo-500 to-purple-600">
              <div className="text-lg tracking-widest">{cardNumber}</div>
              <div className="mt-8 text-sm">Card Holder</div>
              <div className="text-xl">{cardName}</div>
              <div className="mt-2 text-sm">Expires</div>
              <div className="text-lg">{expiry}</div>
            </div>

            {/* Back */}
            <div className="card-back bg-gray-800">
              <div className="mt-8 text-sm">CVV</div>
              <div className="text-lg tracking-widest">{cvv || "•••"}</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4 bg-white p-6 rounded-xl shadow-md">
          <div>
            <label className="block text-sm font-medium">Card Number</label>
            <input
              type="text"
              maxLength="19"
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