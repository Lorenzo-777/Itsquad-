// src/DisplayText.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Animate = () => {
  const data = [
        { header: "Al Quran :", paragraph: "If you do good, you do good for yourselves; and if you do evil, you do it against yourselves. (Chapter 17, Verse 7)" },
    { header: "Sahi Bukhari :", paragraph: "The best among you are those who have the best manners and character" },
    { header: "Al Quran :", paragraph: "And let not the hatred of a people prevent you from being just. Be just; that is nearer to righteousness.(Chapter 5, Verse 8)" },
    { header: "Albert Einstein :", paragraph: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
    { header: "Dale Carnegie :", paragraph: "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all."

 },
  ];

  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 20000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [data.length]);

  return (
    <div className='interface'>
    <div className='animate'>
      <div className='anim'>
      <h2 style={{ color: 'white' }}>{data[index].header}</h2>
      <p style={{ color: 'white' }}>{data[index].paragraph}</p>
      <br/>
      <br/>
      <Link >Read more </Link>
   </div> </div>
   <div className='animate'>
      <div className='anim'>
      <h2 style={{ color: 'white' }}>{data[index].header}</h2>
      <p style={{ color: 'white' }}>{data[index].paragraph}</p>
      <br/>
      <br/>
      <Link >Read more </Link>
   </div> </div>
   <div className='animate'>
      <div className='anim'>
      <h2 style={{ color: 'white' }}>{data[index].header}</h2>
      <p style={{ color: 'white' }}>{data[index].paragraph}</p>
      <br/>
      <br/>
      <Link >Read more </Link>
   </div> </div>
   <div className='animate'>
      <div className='anim'>
      <h2 style={{ color: 'white' }}>{data[index].header}</h2>
      <p style={{ color: 'white' }}>{data[index].paragraph}</p>
      <br/>
      <br/>
      <Link >Read more </Link>
   </div> </div>
   <div className='animate'>
      <div className='anim'>
      <h2 style={{ color: 'white' }}>{data[index].header}</h2>
      <p style={{ color: 'white' }}>{data[index].paragraph}</p>
      <br/>
      <br/>
      <Link >Read more </Link>
   </div> </div>
    
    </div>
    
  );
};

export default Animate;