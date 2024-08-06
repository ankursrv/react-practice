
const ToastMessage = ({ message, onClose }) => {
    return (
      <div className="w-fit py-6 px-9 rounded-lg bg-whitePrimary fixed top-[5.5rem] right-[6.4rem] shadow-shadowPrimary">
        <span>{message}</span>
        <button onClick={onClose} className="bg-inherit ml-4">✖</button>
      </div>
    );
  };
  
  export default ToastMessage;