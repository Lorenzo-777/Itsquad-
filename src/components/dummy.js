// src/DisplayText.js
import React, { useEffect, useState } from 'react';

const Animate = () => {
  const data = [
    { header: "Header 1", paragraph: "This is the first paragraph." },
    { header: "Header 2", paragraph: "This is the second paragraph." },
    { header: "Header 3", paragraph: "This is the third paragraph." },
    { header: "Header 4", paragraph: "This is the fourth paragraph." },
    { header: "Header 5", paragraph: "This is the fifth paragraph." },
  ];

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1"];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [data.length]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: colors[index] }}>{data[index].header}</h1>
      <p style={{ color: colors[index] }}>{data[index].paragraph}</p>
    </div>
  );
};

