import React, { useState } from 'react';

// Sample data with names and game names
const images = [
  { id: '1', tag: '2014', src: '/2014/mary.jpeg', name: 'Mary Kom', gameName: 'Boxing' },
  { id: '2', tag: '2014', src: '/2014/babita.jpeg', name: 'Babita Phogat', gameName: 'Wrestling' },
  { id: '3', tag: '2014', src: '/2014/sukhen.jpg', name: 'Sukhen Dey', gameName: 'Weightlifting' },
  { id: '4', tag: '2014', src: '/2014/abhinav.jpg', name: 'Abhinav Bindra', gameName: 'Shooting' },
  { id: '5', tag: '2014', src: '/2014/apurvi.jpg', name: 'Apurvi Chandela', gameName: 'Shooting' },
  { id: '6', tag: '2014', src: '/2014/sanjeeta.jpg', name: 'Sanjeeta', gameName: 'Hockey' },
  { id: '6', tag: '2014', src: '/2014/sanjeeta.jpg', name: 'Sanjeeta', gameName: 'Hockey' },
  { id: '6', tag: '2014', src: '/2014/sanjeeta.jpg', name: 'Sanjeeta', gameName: 'Hockey' },
  { id: '6', tag: '2014', src: '/2014/sanjeeta.jpg', name: 'Sanjeeta', gameName: 'Hockey' },
  { id: '6', tag: '2014', src: '/2014/sanjeeta.jpg', name: 'Sanjeeta', gameName: 'Hockey' },
];

const tags = ['All', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

export default function Gallery() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [showPopup, setShowPopup] = useState(false);

  const filteredImages =
    selectedTag === 'All'
      ? images
      : images.filter((image) => image.tag === selectedTag);

  const visibleImages = filteredImages.slice(0, 10);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>
      <p className="gallery-subtitle">Put in use some tags</p>

      <div className="tags-container">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`tag-button ${
              selectedTag === tag ? 'active-tag' : ''
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="image-grid">
        {visibleImages.map((item) => (
          <div key={item.id} className="image-item">
          <img src={item.src} alt={item.name} className="image" />
          <div className="info-box">
            <h5 className="image-name">{item.name}</h5>
            <h6 className="game-name">{item.gameName}</h6>
          </div>
        </div>
        
        ))}
      </div>

      {filteredImages.length > 6 && (
        <button className="button" onClick={() => setShowPopup(true)}>
          Show All
        </button>
      )}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button
              className="close-popup-btn"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
            <div className="popup-grid">
              {filteredImages.map((item) => (
               <div key={item.id} className="popup-image-item">
               <img src={item.src} alt={item.name} className="popup-image" />
               <div className="info-box">
                 <p className="popup-image-name">{item.name}</p>
                 <p className="popup-game-name">{item.gameName}</p>
               </div>
             </div>
             
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
