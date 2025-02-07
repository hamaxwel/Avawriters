import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 text-center mt-5">
      <div className="container">
        <p className="mb-2">&copy; 2025 Eva Writers. All Rights Reserved.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="text-light" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a href="#" className="text-light" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter fs-4"></i>
          </a>
          <a href="#" className="text-light" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-telegram fs-4"></i>
          </a>
          <a href="#" className="text-light" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp fs-4"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
