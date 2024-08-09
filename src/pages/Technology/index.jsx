import React, { useState } from 'react';
import ToastMessage from "../../component/ToastMessage"
import SectionWrapper from "../../component/SectionWrapper";
const Technology =() => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now();
    setToasts([...toasts, { id, message }]);
    setTimeout(() => removeToast(id), 3000); // Auto-remove after 3 seconds
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    showToast('Form submitted successfully!');
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

      <SectionWrapper className="bg-black">
        <div className="grid md:grid-cols-2 items-center">
          <div className="md:max-w-[500px]">
            <img src="/images/tech-icons.png" alt="html,css,js,php" />
          </div>
          <div className="text-white">
            <h2 className="text-[42px] mb-8 font-bold">Skills</h2>
            <p className="text-lg font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="using Props Title in this SectionWrapper"></SectionWrapper>

      <SectionWrapper className="bg-dodgerblue">Wrapper SectionWrapper</SectionWrapper>
    </div>
  );
}

export default Technology