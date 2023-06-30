import React, { useState } from 'react';

// function CheckoutForm({productName, quantity, price, subtotal, totalCost, total}) {
function CheckoutForm({ cart, cartTotal }) {
    const [proceedBtn, setProceedBtn] = useState(false);
    const [showReceipt, setShowReceipt] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = () => {
        setProceedBtn(true);
        if (email.includes('@') && name.trim() !== '') {
            setShowReceipt(true);
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div>
            <button onClick={handleClick}>Proceed to Checkout</button>
            {proceedBtn && (
                <div>
                    <div className="input-field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                name="name"
                                className="checkout-form-input"
                                type="text"
                                placeholder="Student Name"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                    </div>
                    <div className="input-field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                name="email"
                                className="checkout-form-input"
                                type="email"
                                placeholder="student@codepath.org"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                                <input name="termsAndConditions" type="checkbox" />
                                <span className="label">
                                    I agree to the{' '}
                                    <a href="#terms-and-conditions">terms and conditions</a>
                                </span>
                            </label>
                        </div>
                    </div>
                    <button onClick={() => setShowReceipt(true)}>Checkout</button>
                </div>
            )}
            {showReceipt && (
                <section className="card-body">
                    <p className="header">Showing receipt for {name} available at {email}:</p>
                    <ul className="purchase">
                        {Object.entries(cart).map(([productName, productProperties]) => {
                            return (<li key={productName}>
                                {productProperties.quantity} total {productName} purchased at a cost of ${productProperties.price} for a total cost of ${productProperties.subTotal}.
                            </li>)
                        })}
                        <li>Before taxes, the subtotal was ${cartTotal}<br />
                            After taxes and fees were applied, the total comes out to ${cartTotal * (1.1)}</li>
                    </ul>
                </section>
            )}
        </div>
    );
}

export default CheckoutForm;