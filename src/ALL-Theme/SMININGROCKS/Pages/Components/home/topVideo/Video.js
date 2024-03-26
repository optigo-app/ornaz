import React, { useState } from 'react';
import './Video.css';
import demovide from '../../../assets/Video/demo2.mp4';

export default function Video() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <img
          src="https://media.istockphoto.com/id/1180931397/photo/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-earrings-elegant-evening.jpg?s=612x612&w=0&k=20&c=miNpkI_ekZ8HoC0U9NhHNacsgcdq8xIFxR-n0zjO5p8="
          style={{ height: 'auto', width: '100%' }}
          onLoad={handleImageLoad}
        />
      ) : (
        <video width="500" autoPlay loop style={{ height: 'auto', width: '100%' }} onLoad={handleVideoLoad}>
          <source src={demovide} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
