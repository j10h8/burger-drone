import React from "react";

function Terms() {
  return (
    <div className='center-items'>
      <div className='center-items info-container'>
        <h1 className='blue-heading'>Terms & Conditions</h1>
        <div>
          <p>
            These Terms and Conditions govern your use of the Burger Drone
            website and the services Burger Drone provides. By accessing and
            using the website and placing orders with Burger Drone, you agree to
            comply with these terms. Please read them carefully.
          </p>
          <p style={{ marginBottom: "0" }}>Ordering and Delivery</p>
          <p style={{ marginTop: "0.4rem" }}>
            You must be at least 18 years old to place an order. Orders can be
            placed through our website or designated mobile application.
            Delivery times may vary based on weather conditions, airspace
            regulations, and other factors outside Burger Drone's control.
            Orders are typically delivered by drones to the specified delivery
            address. Please ensure that the delivery location is accessible and
            safe for drone landing. In the event of unforeseen circumstances or
            technical issues, we may utilize alternative delivery methods.
          </p>
          <p style={{ marginBottom: "0" }}>Menu and Pricing</p>
          <p style={{ marginTop: "0.4rem" }}>
            Our menu offerings and prices are subject to change without prior
            notice. We strive to provide accurate descriptions and images of our
            products, but slight variations may occur. All prices are inclusive
            of applicable taxes.
          </p>
          <p style={{ marginBottom: "0" }}>Payment</p>
          <p style={{ marginTop: "0.4rem" }}>
            Payments can be made securely through our website or designated
            mobile application. Accepted payment methods include major credit
            cards, debit cards, and Swooosh. Orders will only be processed upon
            successful payment authorization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
