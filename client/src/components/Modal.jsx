import classes from "./Modal.module.css"

function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open classname={classes.modal}>
        {children}
      </dialog>
    </>
  )
}

export default Modal
