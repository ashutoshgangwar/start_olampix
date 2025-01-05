import React, { useState } from 'react';

const images = [
  { id: '1', tag: '2012', src: '/2012/vijay.jpeg', medaltype: 'Silver', name: 'Vijay Kumar', gameName: 'Shooting' },
  { id: '2', tag: '2012', src: '/2012/sushil.jpeg', medaltype: 'Silver', name: 'Sushil Kumar', gameName: 'Wrestling' },
  { id: '3', tag: '2012', src: '/2012/saina.jpg', medaltype: 'Bronz', name: 'Saina Nehwal', gameName: 'Badminton' },
  { id: '4', tag: '2012', src: '/2012/mary_kom.jpeg', medaltype: 'Bronz', name: 'Mary Kom', gameName: 'Boxing' },
  { id: '5', tag: '2012', src: '/2012/Gagan_Narang.jpeg', medaltype: 'Bronz', name: 'Gagan Narang', gameName: 'Shooting' },
  { id: '6', tag: '2012', src: '/2012/Yogeshwar_Dutt.jpeg', medaltype: 'Bronz', name: 'Yogeshwar Dutt', gameName: 'Wrestling' },
  { id: '7', tag: '2016', src: '/2016/Sindhu.jpeg', medaltype: 'Silver', name: 'P. V. Sindhu', gameName: 'Badminton' },
  { id: '8', tag: '2016', src: '/2016/Sakshi_Malik.jpeg', medaltype: 'Bronz', name: 'Sakshi Malik', gameName: 'Wrestling' },
  { id: '9', tag: '2020', src: '/2020/Neeraj_Chopra.jpeg', medaltype: 'Gold', name: 'Neeraj Chopra', gameName: 'Javelin Throw' },
  { id: '10', tag: '2020', src: '/2020/mirabai.jpeg', medaltype: 'Silver', name: 'Saikhom Mirabai Chanu', gameName: 'Weightlifting' },
  { id: '11', tag: '2020', src: '/2020/RaviDahiya.jpeg', medaltype: 'Silver', name: 'Ravi Kumar Dahiya', gameName: 'Wrestling' },
  { id: '12', tag: '2020', src: '/2016/sindhu.jpeg', medaltype: 'Bronz', name: 'P. V. Sindhu', gameName: 'Badminton' },
  { id: '13', tag: '2020', src: '/2020/LovlinaBorgohain.jpeg', medaltype: 'Bronz', name: 'Lovlina Borgohain', gameName: 'Boxing' },
  { id: '14', tag: '2020', src: '/2020/indianhockey.jpeg', medaltype: 'Bronz', name: 'Indian Hockey Team', gameName: 'Hockey' },
  { id: '15', tag: '2020', src: '/2020/BajrangPunia.jpeg', medaltype: 'Bronz', name: 'Bajrang Punia', gameName: 'Wrestling' },
  { id: '16', tag: '2024', src: '/2024/neeraj.jpeg', medaltype: 'Silver', name: 'Neeraj Chopra', gameName: 'Javelin Throw' },
  { id: '17', tag: '2024', src: '/2024/ManuBhaker.jpeg', medaltype: 'Bronz', name: 'Manu Bhaker', gameName: 'Shooting' },
  { id: '18', tag: '2024', src: '/2024/indianhockey.jpeg', medaltype: 'Bronz', name: 'Indian Hockey Team', gameName: 'Hockey' },
  { id: '19', tag: '2024', src: '/2024/AmanSehrawat.jpeg', medaltype: 'Bronz', name: 'Aman Sehrawat', gameName: 'Wrestling' },
];

const tags = ['All', '2012', '2016', '2020', '2024'];

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
            <div
              className="info-box"
              style={{
                backgroundColor:
                  item.medaltype === 'Gold' ? '#cfb53b' :
                  item.medaltype === 'Silver' ? 'silver' :
                  item.medaltype === 'Bronz' ? '#cd7f32' : '#837006'
              }}
            >
              <h5 className="image-name">{item.name}</h5>
              <h6 className="game-name">({item.medaltype})</h6>
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
