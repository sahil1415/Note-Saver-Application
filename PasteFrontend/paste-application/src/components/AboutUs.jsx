import React from "react";
import "./AboutUs.css"; // Import CSS for styling

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About PasteApp</h1>
      <p>
        Welcome to <strong>PasteApp</strong>, your simple and efficient online paste tool.
        Whether you need to share code snippets, notes, or any text-based content,
        PasteApp makes it easy with a clean and user-friendly interface.
      </p>

      <h2>Why Choose PasteApp?</h2>
      <ul>
        <li>⚡ Fast and lightweight</li>
        <li>🔒 Secure paste storage</li>
        <li>📄 Easy-to-use interface</li>
        <li>🌍 Accessible from anywhere</li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        Our goal is to provide a **hassle-free text-sharing platform** where users can quickly 
        create, store, and share pastes without unnecessary distractions.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? Reach out to us at <a href="mailto:support@pasteapp.com">support@pasteapp.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;
