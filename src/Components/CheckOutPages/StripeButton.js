import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = (props) => {
	const getToken = (token) => {
		console.log(token);
	};
	return (
		<StripeCheckout
			label="Place your order"
			name="Joe Shop"
			billingAddress
			shippingAddress
			image="https://i.ibb.co/3BmghZC/Screenshot-3.png"
			description={`Your Total bill is ${props.totalAmount}`}
			panelLabel="Pay Now"
			token={getToken}
			stripeKey="pk_test_51IjQHaSGCwM9HCHXhQTxmsUIrzXwo8WpF30Mf6fTpYjSMEteBO3Pex8TvNFRXggVrpHDdADvh1v6Om0JbOb800UU00VtX1IVRw"
		/>
	);
};

export default StripeButton;