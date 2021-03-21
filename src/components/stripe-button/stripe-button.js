import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publihableKey = 'pk_test_51IXTERB31zkSAZYTRXDeCZz8Mr27PO8kyRZ7Iuj6FzNmNyAK2KEJ2ad2akgbRaXjrmluEOQo9R5J6paXPlh0tuRX00ptdZYO4F';

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publihableKey}
        />
    )
}

export default StripeCheckoutButton;