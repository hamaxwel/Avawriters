import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. We'll get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card p-4 shadow-sm animate__animated animate__fadeIn">
              <h2 className="card-title text-center fw-bold mb-4">Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
            <div className="mt-4 text-center">
              <p>Or connect with us on social media:</p>
              <a href="#" className="text-primary mx-2">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-info mx-2">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-danger mx-2">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-primary mx-2">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
