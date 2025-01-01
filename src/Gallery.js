import React, { useState } from 'react';



// Sample data
const images = [
    { id: '1', tag: 'Beautiful', src: '/pic1.jpeg'},
  { id: '2', tag: 'Beautiful', src: '/logo.jpeg' },
  { id: '3', tag: 'Cool', src: '/pic1.jpeg' },
  { id: '4', tag: 'Awesome', src: '/pic1.jpeg' },
  { id: '5', tag: 'Beautiful', src: '/pic1.jpeg' },
  { id: '6', tag: 'Creative', src: '/pic1.jpeg'},
  { id: '7', tag: 'Cool',src: '/pic1.jpeg' },
  { id: '8', tag: 'Awesome', src: '/pic1.jpeg' },
];

const tags = ['All', 'Beautiful', 'Creative', 'Cool', 'Awesome'];

export default function Gallery() {
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredImages =
    selectedTag === 'All'
      ? images
      : images.filter((image) => image.tag === selectedTag);

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
        {filteredImages.map((item) => (
          <div key={item.id} className="image-item">
            <img src={item.src} alt={item.tag} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
}
