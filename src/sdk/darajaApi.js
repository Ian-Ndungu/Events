import axios from "axios";

const DARAJA_API_BASE_URL = "https://sandbox.safaricom.co.ke";
const DARAJA_CONSUMER_KEY = process.env.REACT_APP_DARAJA_CONSUMER_KEY;
const DARAJA_CONSUMER_SECRET = process.env.REACT_APP_DARAJA_CONSUMER_SECRET;
const DARAJA_SHORTCODE = process.env.REACT_APP_DARAJA_SHORTCODE;
const DARAJA_PASSKEY = process.env.REACT_APP_DARAJA_PASSKEY;
const DARAJA_CALLBACK_URL = process.env.REACT_APP_DARAJA_CALLBACK_URL;

const getDarajaToken = async () => {
  const auth = Buffer.from(
    `${DARAJA_CONSUMER_KEY}:${DARAJA_CONSUMER_SECRET}`
  ).toString("base64");
  const response = await axios.get(
    `${DARAJA_API_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
    {
      headers: {
        Authorization: `Basic ${auth}`,
        z,
      },
    }
  );
  return response.data.access_token;
};

const processPayment = async (phoneNumber, amount) => {
  const token = await getDarajaToken();
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:.TZ]/g, "")
    .slice(0, 14);
  const password = Buffer.from(
    `${DARAJA_SHORTCODE}${DARAJA_PASSKEY}${timestamp}`
  ).toString("base64");

  const paymentData = {
    BusinessShortCode: DARAJA_SHORTCODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: DARAJA_SHORTCODE,
    PhoneNumber: phoneNumber,
    CallBackURL: DARAJA_CALLBACK_URL,
    AccountReference: "TicketBooking",
    TransactionDesc: "Payment for event tickets",
  };

  const response = await axios.post(
    `${DARAJA_API_BASE_URL}/mpesa/stkpush/v1/processrequest`,
    paymentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export { processPayment };
