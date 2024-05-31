// src/QRCodeGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [qrValue, setQRValue] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleGenerate = () => {
    setQRValue(inputText);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text to generate QR code"
        style={{ width: '300px', padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={handleGenerate}
        style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Generate
      </button>
      <div style={{ marginTop: '20px' }}>
        {qrValue && <QRCode value={qrValue} />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
