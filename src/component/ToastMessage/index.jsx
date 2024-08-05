import styles from './toast.module.css'
const ToastMessage = ({ message, onClose }) => {
    return (
      <div className={styles.toast}>
        <span>{message}</span>
        <button onClick={onClose} className={styles.close}>✖</button>
      </div>
    );
  };
  
  export default ToastMessage;