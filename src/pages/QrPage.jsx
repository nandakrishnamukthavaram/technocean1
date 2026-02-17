import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Qr from "../components/Qr";
import { renderToString } from "react-dom/server";
import { useEffect } from "react";

const QrPage = () => {
  const { id } = useParams();
  const [qrImageUrl, setQrImageUrl] = useState(null);

  useEffect(() => {
    const string = renderToString(<Qr userId={id} />);

    // const xml = new XMLSerializer().serializeToString(<Qr userId={id} />);
    const svg64 = btoa(string);
    const image64 = "data:image/svg+xml;base64," + svg64;
    console.log(image64);
    //    setQrImageUrl(image64);
  }, []);

  return <Qr userId={id} />;
};

export default QrPage;
