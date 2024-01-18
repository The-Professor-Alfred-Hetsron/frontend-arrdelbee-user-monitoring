import React from 'react'
import { createPortal } from "react-dom";

const Modal:React.FC = () => {
  return createPortal(
    <React.Fragment>
        
    </React.Fragment>,  document.body
  )
}

export default Modal