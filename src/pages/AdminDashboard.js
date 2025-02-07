import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AdminDashboard() {
  // Sample assignments data with an id for each assignment
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Math Homework", deadline: "2025-02-10", completed: false },
    { id: 2, title: "Science Report", deadline: "2025-02-12", completed: true },
  ]);

  // Sample statistics data
  const [visitors, setVisitors] = useState(500);
  const [completedAssignments, setCompletedAssignments] = useState(150);
  // Sales data for each month (dummy data)
  const [salesData, setSalesData] = useState([10, 20, 30, 40, 50]);

  // States for attaching assignments to clients
  const [selectedAssignment, setSelectedAssignment] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [attachments, setAttachments] = useState([]);

  // Mark an assignment as completed
  const handleCompleteAssignment = (index) => {
    const updatedAssignments = [...assignments];
    updatedAssignments[index].completed = true;
    setAssignments(updatedAssignments);
    alert("Assignment marked as completed. You can now attach it to a client.");
  };

  // Attach a completed assignment to a client
  const handleAttachAssignment = (e) => {
    e.preventDefault();
    const assignment = assignments.find(
      (a) => a.id === parseInt(selectedAssignment)
    );
    if (!assignment) {
      alert("Please select a valid assignment.");
      return;
    }
    const newAttachment = {
      assignmentId: assignment.id,
      assignmentTitle: assignment.title,
      clientEmail,
      attachmentFile: attachmentFile ? attachmentFile.name : "No File",
    };
    setAttachments([...attachments, newAttachment]);
    alert(`Assignment "${assignment.title}" attached to client ${clientEmail}.`);
    // Reset the form fields
    setSelectedAssignment("");
    setClientEmail("");
    setAttachmentFile(null);
  };

  // Data and options for the bar graph
  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: salesData,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
  };

  return (
    <section className="container py-5">
      <h2 className="display-4 fw-bold text-center mb-5">Admin Dashboard</h2>
      <div className="row">
        {/* Assignments Overview */}
        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-sm">
            <h3 className="fw-bold">Assignments Overview</h3>
            <ul className="list-group">
              {assignments.map((assignment, index) => (
                <li
                  key={assignment.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {assignment.title} - Due: {assignment.deadline}
                  </span>
                  {!assignment.completed && (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleCompleteAssignment(index)}
                    >
                      Complete
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Site Statistics */}
        <div className="col-md-6 mb-4">
          <div className="card p-4 shadow-sm">
            <h3 className="fw-bold">Site Statistics</h3>
            <p>
              <strong>Visitors:</strong> {visitors}
            </p>
            <p>
              <strong>Completed Assignments:</strong> {completedAssignments}
            </p>
          </div>
        </div>
      </div>
      {/* Sales Bar Graph */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card p-4 shadow-sm">
            <h3 className="fw-bold">Sales Bar Graph</h3>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
      </div>
      {/* Form to attach completed assignment to client */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h3 className="fw-bold">Attach Completed Assignment to Client</h3>
            <form onSubmit={handleAttachAssignment}>
              <div className="mb-3">
                <label className="form-label">Select Assignment</label>
                <select
                  className="form-select"
                  value={selectedAssignment}
                  onChange={(e) => setSelectedAssignment(e.target.value)}
                  required
                >
                  <option value="">--Select Assignment--</option>
                  {assignments
                    .filter((a) => a.completed)
                    .map((assignment) => (
                      <option key={assignment.id} value={assignment.id}>
                        {assignment.title}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Client Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Attach File</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setAttachmentFile(e.target.files[0])}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Assignment
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Display sent attachments */}
      {attachments.length > 0 && (
        <div className="row">
          <div className="col-md-12">
            <div className="card p-4 shadow-sm">
              <h3 className="fw-bold">Sent Attachments</h3>
              <ul className="list-group">
                {attachments.map((att, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{att.assignmentTitle}</strong> attached to{" "}
                    {att.clientEmail} - File: {att.attachmentFile}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminDashboard;
