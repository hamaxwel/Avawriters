import React, { useState } from "react";
import { Link } from "react-router-dom";

function OrderPlacement() {
  const [assignments, setAssignments] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    deadline: "",
    file: null,
  });
  const [showAuthMsg, setShowAuthMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAuthenticated = localStorage.getItem("user");

    if (!isAuthenticated) {
      setShowAuthMsg(true);
      return;
    }

    // Clear any previous error message if authenticated
    setShowAuthMsg(false);

    // Process submission if authenticated
    setAssignments([...assignments, formData]);
    alert(
      "Your assignment has been submitted. You will be notified upon completion."
    );
    setFormData({ title: "", details: "", deadline: "", file: null });
  };

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 p-5 bg-white shadow-lg rounded animate__animated animate__fadeIn">
            <h2 className="display-5 fw-bold text-dark">Place Your Order</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Assignment Title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="details"
                  placeholder="Assignment Details"
                  className="form-control"
                  rows="4"
                  value={formData.details}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  name="file"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Assignment Deadline</label>
                <input
                  type="date"
                  name="deadline"
                  className="form-control"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
            </form>
            {showAuthMsg && (
              <div className="alert alert-warning mt-3">
                You must be logged in to submit an assignment. Please{" "}
                <Link to="/login">Login</Link> or{" "}
                <Link to="/sign-up">Create an account</Link>.
              </div>
            )}
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <h3 className="fw-bold text-dark">Your Assignments</h3>
            <ul className="list-group">
              {assignments.map((assignment, index) => (
                <li key={index} className="list-group-item">
                  <strong>{assignment.title}</strong> - Due: {assignment.deadline}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderPlacement;
