import React from "react";

function AboutUs() {
  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 p-5 bg-white shadow-lg rounded animate__animated animate__fadeIn">
            <h2 className="display-4 fw-bold text-dark">About Eva Writers</h2>
            <p className="lead text-secondary mt-3">
              Eva Writers is a professional assignment help platform dedicated to providing high-quality academic assistance. Our goal is to help students excel by offering expertly written assignments tailored to their needs.
            </p>
            <div className="row mt-4">
              <div className="col-md-4 mb-3">
                <div className="card border-0 shadow-sm p-3">
                  <h4 className="fw-bold text-primary">Expert Writers</h4>
                  <p className="text-muted">Our team consists of experienced professionals with subject-matter expertise.</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-0 shadow-sm p-3">
                  <h4 className="fw-bold text-primary">Timely Delivery</h4>
                  <p className="text-muted">We ensure all assignments are completed before deadlines.</p>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card border-0 shadow-sm p-3">
                  <h4 className="fw-bold text-primary">Quality Assurance</h4>
                  <p className="text-muted">All work is thoroughly reviewed to meet academic standards.</p>
                </div>
              </div>
            </div>
            <a href="/contact-us" className="btn btn-primary btn-lg mt-4 shadow-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
