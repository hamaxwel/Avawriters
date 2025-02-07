import React from "react";

function Home() {
  return (
    <section 
      className="d-flex align-items-center justify-content-center min-vh-100 bg-light"
      style={{
        backgroundImage: "url('/lap.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: '"Montserrat", sans-serif' 
      }}
    >
      <div className="container text-center py-5">
        {/* Welcome Section */}
        <div className="row justify-content-center">
          <div className="col-lg-8 p-5 bg-white shadow-lg rounded animate__animated animate__fadeIn">
            <h1 className="display-4 fw-bold text-dark">Welcome to Eva Writers</h1>
            <p className="lead text-secondary mt-3">
              Your one-stop solution for all academic assignments—from essays to research papers, case studies, dissertations, and more. We deliver excellence at competitive prices!
            </p>
            <a href="/order" className="btn btn-primary btn-lg mt-4 shadow-sm">
              Place an Order
            </a>
          </div>
        </div>

        {/* Services Offered Section */}
        <div className="row mt-5 animate__animated animate__fadeInUp animate__delay-1s">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm p-3 hover-scale">
              <h3 className="fw-bold text-primary">Affordable Pricing</h3>
              <p className="text-muted">
                Get the best value for your money with our competitive rates.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm p-3 hover-scale">
              <h3 className="fw-bold text-primary">Expert Assistance</h3>
              <p className="text-muted">
                Our experienced writers cover all academic disciplines with precision.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm p-3 hover-scale">
              <h3 className="fw-bold text-primary">Secure Submission</h3>
              <p className="text-muted">
                Enjoy peace of mind with our confidential and timely delivery.
              </p>
            </div>
          </div>
        </div>

        {/* About & More Services Section */}
        <div className="row mt-5 animate__animated animate__fadeInUp animate__delay-2s">
          <div className="col-lg-12">
            <div className="card p-4 shadow-sm hover-scale">
              <h2 className="fw-bold text-dark">Our Services</h2>
              <p className="text-secondary">
                At Eva Writers, we offer comprehensive academic assistance for every type of assignment. When you need help, our team of expert writers is here to support you. Our services include:
              </p>
              <ul className="text-secondary text-start ms-3">
                <li>Tests, quizzes, and lab work assignments</li>
                <li>General academic assignments</li>
                <li>Writing professional CVs</li>
                <li>Discussion posts</li>
                <li>Data analysis and interpretation</li>
                <li>Dissertations and thesis</li>
                <li>Proposals and project plans</li>
                <li>Essays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
