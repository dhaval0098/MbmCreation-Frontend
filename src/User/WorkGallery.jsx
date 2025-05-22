import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Usernavbar } from './Usernavbar';

export const WorkGallery = () => {
  const [items, setItems] = useState([]);

  const getwork = async () => {
    try {
      const res = await axios.get('/getitems');
      console.log('API response:', res.data); // Debug: inspect structure

      // Support both: res.data = [ ... ] or { data: [ ... ] }
      const rawItems = Array.isArray(res.data) ? res.data : res.data.data || [];

      const cleanItems = rawItems.map(item => ({
        ...item,
        imageURL: Array.isArray(item.imageURL)
          ? item.imageURL
          : item.imageURL
          ? [item.imageURL]
          : [],
      }));

      setItems(cleanItems);
    } catch (err) {
      console.error('Error fetching items:', err);
      setItems([]);
    }
  };

  useEffect(() => {
    getwork();
  }, []);

  return (
    <div className="container mt-">
      <div className="row">
        {!items.length ? (
          <div className="col-12 text-center">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          items.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border rounded shadow-lg">
                {item.imageURL.length > 0 ? (
                  <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    emulateTouch
                  >
                    {item.imageURL.map((url, i) => (
                      <div key={i}>
                        <img
                          src={url}
                          alt={`slide-${i}`}
                          style={{ height: '250px', objectFit: 'cover', width: '100%' }}
                          onError={(e) => (e.target.style.display = 'none')}
                        />
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <div className="text-center py-3">No images available</div>
                )}
                <div className="card-body text-center">
                  <p className="mb-1">
                    <strong>Work:</strong> {item.work || 'Not specified'}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Usernavbar />
    </div>
  );
};
