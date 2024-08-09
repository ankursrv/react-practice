import React, { useState } from "react";
import ToastMessage from "../../component/ToastMessage";
import SectionWrapper from "../../component/SectionWrapper";
const Technology = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now();
    setToasts([...toasts, { id, message }]);
    setTimeout(() => removeToast(id), 3000); // Auto-remove after 3 seconds
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    showToast("Form submitted successfully!");
    // Here, you can add any other logic you need to handle form submission.
  };

  return (
    <div className="">
      <h1>This is Technologys Page</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter something" required />
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => showToast("Info message", "info")}>
        Show Info Toast
      </button>
      <button onClick={() => showToast("Success message", "success")}>
        Show Success Toast
      </button>
      <button onClick={() => showToast("Error message", "error")}>
        Show Error Toast
      </button>
      <div className="toast-container">
        {toasts.map((toast) => (
          <ToastMessage
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Technology;
