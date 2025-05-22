import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export const WorkDetails = () => {
  const { id } = useParams();
  const [workItem, setWorkItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWork = async () => {
    try {
      const res = await axios.get(`/work/${id}`);
      setWorkItem(res.data.data);
    } catch (error) {
      console.error("Error fetching work details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWork();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (!workItem) {
    return <div className="text-center mt-5 text-danger">Post not found</div>;
  }

  return (
    <div className="container mt-5">
      <Link to="/workgallery" className="btn btn-secondary mb-3">← Back to Gallery</Link>
      <h3>Work: {workItem.work}</h3>

      {workItem.imageURL?.length ? (
        <div className="row mt-4">
          {workItem.imageURL.map((url, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <img
                src={url}
                alt={`work-${index}`}
                className="img-fluid rounded shadow"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};
