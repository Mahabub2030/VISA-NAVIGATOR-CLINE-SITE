
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Authcontext } from "../AuthProvider.jsx/AuthProvider";

const MyVisaApplication = () => {
  const { user } = useContext(Authcontext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/applicationVisa?email=${encodeURIComponent(
        user.email
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setApplications(data);
        } else {
          setApplications([data]);
        }
      })
      .catch((error) => console.error("Error fetching applications:", error));
  }, [user.email]);

  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/applicationVisa/${id}`)
          .then(() => {
            Swal.fire("Cancelled!", "Your application has been cancelled.", "success");
            setApplications(applications.filter((app) => app._id !== id));
          })
          .catch((error) => {
            Swal.fire("Error!", "Could not cancel the application.", "error");
            console.error("Error cancelling application:", error);
          });
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center mt-10">My Visa Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.map((app) => (
            <div
              key={app._id}
              className="border border-gray-300 rounded-lg shadow-md p-4 bg-gray-800 text-white"
            >
              <div className="flex justify-center">
                <img
                  src="path-to-flag-image.jpg" // Replace with appropriate flag URL
                  alt={`${app.country} flag`}
                  className="w-24 h-16 mb-4"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {app.country} - {app.type} Visa
              </h3>
              <p>
                <strong>Processing Time:</strong> {app.processingTime}
              </p>
              <p>
                <strong>Fee:</strong> ${app.fee}
              </p>
              <p>
                <strong>Validity:</strong> {app.validity} days
              </p>
              <p>
                <strong>Application Method:</strong> {app.applicationMethod}
              </p>
              <p>
                <strong>Applied Date:</strong>{" "}
                {new Date(app.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Applicant:</strong> {app.firstname} {app.lastname}
              </p>
              <p>
                <strong>Email:</strong> {app.email}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800 transition"
                onClick={() => handleCancel(app._id)}
              >
                Cancel Application
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyVisaApplication;

