
// app/components/UnderConstructionModal.js
import React, { useState } from "react";

const UnderConstructionModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Website Under Construction</h2>
          <p>We are working hard to bring this site to life. Stay tuned!</p>
          <button onClick={closeModal}>Close</button>
        </div>
        <style jsx>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
          }
          .modal-content {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          button {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background-color: #0070f3;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
          }
          button:hover {
            background-color: #005bb5;
          }
        `}</style>
      </div>
    )
  );
};

export default UnderConstructionModal;
