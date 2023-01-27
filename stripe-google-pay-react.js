import React from "react";
import "./styles.css";
import GooglePayButton from "@google-pay/button-react";

function App() {
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "stripe",
            "stripe:version": "2022-11-15",
            "stripe:publishableKey":
              "pk_test_51L3g9hHg4Ph9coEEaxjVFrMxXNtKKoNXKhdRh6duO3jeGjmVqyJCeyUCMFXpxk2MXrLhXCTHNKkC222nCXmgdflK00CICToSL4"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "446.71",
      currencyCode: "AUD",
      countryCode: "AU"
    }
  };

  function handleLoadPaymentData(paymentData) {
    console.log("load payment data", paymentData);
  }

  console.log("ReadyToPayChangeResponse");

  return (
    <div className="buttons">
      <GooglePayButton
        buttonType="plain"
        buttonLocale="en"
        buttonSizeMode="fill"
        buttonColor="white"
        className="google-pay-container"
        paymentRequest={paymentRequest}
        onLoadPaymentData={handleLoadPaymentData}
      />
    </div>
  );
}

export default App;

