import CheckoutSummary from "../Components/Checkout/CheckoutSummary"
import ShippingAddress from "../Components/Checkout/ShippingAddress"

const Checkout = () => {
    return (
        <div className='pt-10 w-7xl mb-10 m-auto'>
            <div className="flex">
                <div className="flex-2/3 mr-5">
                    <ShippingAddress/>
                </div>
                <div className="flex-1/3">
                    <CheckoutSummary />
                </div>

            </div>
        </div>
    )
}

export default Checkout
