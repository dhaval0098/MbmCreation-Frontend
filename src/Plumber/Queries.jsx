import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Usernavbar } from '../User/Usernavbar';

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const response = await axios.get('/getqueries');
      console.log('API Response:', response.data);

      if (Array.isArray(response.data.data)) {
        setQueries(response.data.data);
      } else {
        throw new Error('Unexpected API response structure');
      }

    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch queries');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this query?');
    if (!confirm) return;

    try {
      await axios.delete(`/deletequery/${id}`);
      setQueries(prev => prev.filter(query => query._id !== id));
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete query');
    }
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;

  return (
    <div className="container mt-5 d-flex flex-wrap justify-content-center">
      {queries.length === 0 ? (
        <p>No queries available.</p>
      ) : (
        queries.map((query) => (
          <div
            className="card shadow-sm m-2"
            style={{ width: '22rem' }}
            key={query._id}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">Contact Details</h5>
              <p className="card-text"><strong>Name:</strong> {query.name}</p>
              <p className="card-text"><strong>Phone:</strong> {query.phone}</p>
              <p className="card-text"><strong>Message:</strong><br /> {query.message}</p>
              <button
                className="btn btn-danger btn-sm mt-3"
                onClick={() => handleDelete(query._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
      <Usernavbar />
    </div>
  );
};

export default Queries;
