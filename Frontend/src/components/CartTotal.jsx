import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
    // Destructure necessary values from ShopContext
    const { currency, delivery_fees, getCartAmount } = useContext(ShopContext);

    return (
        <div className="w-full">
            {/* Title Section */}
            <div className="text-2xl">
                <Title text1={"CART "} text2={" TOTALS"} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                {/* Subtotal */}
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                {/* Shipping Fee */}
                <div className="flex justify-between">
                    <p>Shipping Fee</p>
                    <p>{currency}{delivery_fees}.00</p>
                </div>
                <hr />
                {/* Total Amount */}
                <div className="flex justify-between">
                    <b>Total</b>
                    {console.log(delivery_fees)}
                    
                    <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fees}.00</b>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
