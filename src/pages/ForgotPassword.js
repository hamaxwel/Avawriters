import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your password reset logic here (e.g., API call)
    alert("Password reset link has been sent to your email address.");
    setEmail("");
  };

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card p-4 shadow-sm animate__animated animate__fadeIn">
              <h2 className="text-center fw-bold mb-4">Forgot Password</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Reset Link
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
