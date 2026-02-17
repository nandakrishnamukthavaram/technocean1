// import "dotenv/config";
const keyHexString =
  "9e5f26e9ad28f1a12b71508035680e256409cb7d9760d28b47d4eadbefd4d5ec";
const keyIVHexString = "6b04290cbfc29c6b3fe6cbd827a8ec99";
const algo = "aes-256-cbc";

// Convert hex string to Uint8Array
function hexStringToUint8Array(hexString) {
  return new Uint8Array(
    hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
  );
}

// Convert Uint8Array to base64 string
function uint8ArrayToBase64(uint8Array) {
  return btoa(String.fromCharCode.apply(null, uint8Array));
}

// Convert base64 string to Uint8Array
function base64ToUint8Array(base64String) {
  const binaryString = atob(base64String);
  const uint8Array = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  return uint8Array;
}

export const encrypt = async (data) => {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    hexStringToUint8Array(keyHexString),
    { name: "AES-CBC" },
    false,
    ["encrypt"]
  );
  const iv = hexStringToUint8Array(keyIVHexString);
  const encryptedData = await crypto.subtle.encrypt(
    { name: "AES-CBC", iv: iv },
    key,
    encoder.encode(JSON.stringify(data))
  );
  //   console.log(window.crypto.createCipher);
  return uint8ArrayToBase64(new Uint8Array(encryptedData));
};

export const decrypt = async (data) => {
  const decoder = new TextDecoder();
  const key = await crypto.subtle.importKey(
    "raw",
    hexStringToUint8Array(keyHexString),
    { name: "AES-CBC" },
    false,
    ["decrypt"]
  );
  const iv = hexStringToUint8Array(keyIVHexString);
  const decryptedData = await crypto.subtle.decrypt(
    { name: "AES-CBC", iv: iv },
    key,
    base64ToUint8Array(data)
  );
  return JSON.parse(decoder.decode(new Uint8Array(decryptedData)));
};

// // import "dotenv/config";
// import crypto from "crypto";
// import { Buffer } from "buffer";

// const keyBuffer = Buffer.from(
//   "9e5f26e9ad28f1a12b71508035680e256409cb7d9760d28b47d4eadbefd4d5ec",
//   "HEX"
// );
// const keyIVBuffer = Buffer.from("6b04290cbfc29c6b3fe6cbd827a8ec99", "HEX");
// const algo = "aes-256-cbc";

// export const encrypt = (data) => {
//   const data_base64 = Buffer.from(JSON.stringify(data)).toString("base64");

//   const cipher = crypto.createCipheriv(algo, keyBuffer, keyIVBuffer);

//   let encryptedData = cipher.update(data_base64, "utf8", "hex");
//   encryptedData += cipher.final("hex");

//   return encryptedData;
// };

// export const decrypt = (data) => {
//   const decipher = crypto.createDecipheriv(algo, keyBuffer, keyIVBuffer);
//   let decryptedBase64Data = decipher.update(data, "hex", "utf8");
//   decryptedBase64Data += decipher.final("utf8");

//   const decryptedData = Buffer.from(decryptedBase64Data, "base64").toString(
//     "utf8"
//   );

//   return JSON.parse(decryptedData);
// };
