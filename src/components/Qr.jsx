import React, { useEffect, useState } from "react";
import { QRNormal } from "react-qrbtf";

const Qr = ({ userId }) => {
  const [qrData, setQrData] = useState(generateQRData(userId));

  function generateQRData(userId) {
    const currentDate = new Date();

    const dataObject = {
      userId: userId,
      dateTime: currentDate,
    };

    const jsonString = JSON.stringify(dataObject);
    const base64String = btoa(jsonString);
    // console.log(base64String);
    return base64String;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setQrData(generateQRData(userId));
    }, 10000);

    return () => clearInterval(interval);
  }, [userId]);

  return (
    <QRNormal
      value={qrData}
      className="my-qrcode"
      styles={{ svg: { width: "170px" } }}
      type="rand"
      size={50}
      opacity={100}
      posType="rect"
      otherColor="#FFFFFF"
      posColor="#FF7800"
    />
  );
};

export default Qr;
