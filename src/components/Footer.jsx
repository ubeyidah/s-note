import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-400 absolute bottom-0 left-0 right-0 to-teal-200 font-karla text-center py-6">
      <p>&copy; {new Date().getFullYear()}. UBEYID </p>
    </footer>
  );
};

export default Footer;
