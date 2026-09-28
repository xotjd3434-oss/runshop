import React from 'react'

function Modal({ image, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-panel">
        <button
          className="modal-close"
          onClick={onClose}>
          ❌</button>

        <img
          src={image}
          alt="러닝슈즈 확대 이미지"
        />
      </div>
    </div>
  )
}

export default Modal