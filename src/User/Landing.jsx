import React, { useEffect } from "react";
import { Usernavbar } from "./Usernavbar";
import { Form, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Landing() {
  const {register,handleSubmit}=useForm()
  const submithandler = async(data)=>{
    const responce = await axios.post("/addquery",data)
    alert("message sent sucessfully")
    console.log(responce);
    
    res.json({
      data:responce,
      message:"query added sucessfull"
    })
  }
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("animate__animated", "animate__fadeInUp");
            el.classList.remove("animate__fadeOutDown");
            el.style.opacity = 1;
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    
    <div
    
      className="bg-dark text-light p-0"
      style={{
        fontFamily: "Roboto, sans-serif",
        scrollBehavior: "smooth",
        overflowX: "hidden",
        width: "100%",
      }}
    >
      {/* Global Style Fix for overflow */}
      <style>{`
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        .container, .container-fluid {
          max-width: 100%;
          padding-left: 15px;
          padding-right: 15px;
        }

        .row {
          margin-left: 0;
          margin-right: 0;
        }

        .animate-on-scroll {
          will-change: transform, opacity;
          animation-fill-mode: both;
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

      <header className="bg-primary text-white text-center py-5 mt-2">
        <h1 className="display-4">Reliable And Fast Services</h1>
        <p className="lead">Fast, Professional & Affordable Solutions</p>
       
        <Link to="/contactus"className="btn btn-outline-light mt-3">Contact Us</Link>
      </header>

      <section className="container py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {[
            ["Electric Work", "Safe and efficient electrical setup for homes, offices, and industrial spaces, 24/7."],
            ["Solar Work", "Eco-friendly energy solutions with expert solar panel fitting and maintenance."],
            ["Plumbing Work", "Safe and effective cleaning of blocked drains and pipes."],
            ["Civil Work","Durable and reliable construction for foundations, walls, and structures."],
            ["Elevation Work","Aesthetic and structural enhancements to improve building appearance and value."]


          ].map(([title, desc], i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card h-100 bg-secondary text-white shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-5 animate-on-scroll"
        style={{
          backgroundColor: "transparent",
          color: "#fff",
          willChange: "transform, opacity",
        }}
      >
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Certified and experienced Worker</li>
                <li>Transparent pricing with no hidden costs</li>
                <li>Quality service guarantee</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Available 24/7 for emergencies</li>
                <li>Locally owned and operated</li>
                <li>High customer satisfaction rate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-5 animate-on-scroll"
        style={{
          backgroundColor: "transparent",
          color: "#fff",
          willChange: "transform, opacity",
        }}
      >
        
        <div className="container">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                {...register("name")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Phone" className="form-label">Phone</label>
              <input
                type="Phone"
                className="form-control"
                id="Phone"
                placeholder="Your Phone"
                {...register("phone")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your Message"
                {...register("message")}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit(submithandler)}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-3">
        <p className="mb-0">&copy; 2025 Services Co. All rights reserved.</p>
      </footer>
      <Usernavbar></Usernavbar>
    </div>
    
  );
}
