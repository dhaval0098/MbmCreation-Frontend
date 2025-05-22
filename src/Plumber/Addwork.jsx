import React, { useState } from 'react';
import { Usernavbar } from '../User/Usernavbar';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const Addwork = () => {
  const [label, setLabel] = useState('');
  const [files, setFiles] = useState([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const submithandler = async (data) => {
    try {
      const formData = new FormData();
      formData.append('work', data.work);
  
      // Append all selected images
      if (data.image && data.image.length > 0) {
        for (let i = 0; i < data.image.length; i++) {
          formData.append('images', data.image[i]); // note plural 'images' or adjust backend accordingly
        }
      }
  
      const res = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      console.log('Response:', res.data);
  
      if (res.data.imageURLs || res.data.imageURL) {
        reset();
        // Optionally refresh data here if needed
        // allitems();
      }
    } catch (error) {
      console.error('Error submitting items:', error);
    }
  };
  return (
    <>
      {/* Navbar fixed to top */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
        <Usernavbar />
      </div>

      {/* Content with top padding to avoid being hidden behind fixed navbar */}
      <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#f4f7fa' }}>
        <div className="container py-5">
          <div
            className="shadow p-4 rounded"
            style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff' }}
          >
            <h3 className="mb-4 text-primary text-center">Upload Work Files</h3>

            <form >
              <div className="form-group mb-3">
                <label htmlFor="labelInput" className="form-label fw-bold">Label</label>
                <input
                  type="text"
                  className="form-control"
                  
                  
                  placeholder="Enter a work detail"
                  required
                  {...register("work")}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="fileInput" className="form-label fw-bold">Select Files</label>
                <input
                  type="file"
                  className="form-control"
                  id="fileInput"
                  
                  multiple
                  required
                  {...register("image")}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100"onClick={handleSubmit(submithandler)}>Upload</button>
            </form>

            {files.length > 0 && (
              <div className="mt-4">
                <h5 className="text-secondary">Selected Files:</h5>
                <ul className="list-group">
                  {files.map((file, index) => (
                    <li key={index} className="list-group-item">{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
