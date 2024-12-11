import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section: Connect with us */}
      <div className="footer-section left">
        <p className="footer-heading">Connect with us</p>
        <p>📞 +91 9569433404</p>
        <p>📧 info@deepnetsoft.com</p>
      </div>

      {/* Center Section: Logo */}
      <div className="footer-section center">
        <p className="footer-heading">Deep Net Soft</p>
        <div className="footer-logo">
          <img
            src="https://s3-alpha-sig.figma.com/img/22e3/1e48/6860545013e0a63ba8cb7e94004971f7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o-WEUq4CJ4pKS67-0Yfv8slD05pbDNN9i7JxJYRUD-sTFtt9xlGbphtEn9tg871wfSQBCj7VtI4oxCfsNMntjBcNPRxgrtx0Dg3Pj9JzIaDOCBnkscALrTL4inHofgiRXzIZrq~Fp1t2rRqW7epVW7oBum4ergd5C6p5fbxutCNTcncAiMGNGr7wJ5OWDOtj9QNwq~RvEBG81TZQxw5v4~pXrDA7PFs4eev2jQoM97q9FZ~TLAcw~QxnSHF8WV6SzD196YBLPiEjUtrgirQ9XfXT8DQWZi9O9jLCS5OXGlbWAhefFqxlBKrHFPcqni3aJ12MO3b3ddPcxj9jeBlfSQ__"
            alt="Deep Net Soft Logo"
          />
        </div>
      </div>

      {/* Right Section: Find us */}
      <div className="footer-section right">
        <p className="footer-heading">Find us</p>
        <p>First Floor, Phase 1</p>
        <p>Infopark, kakkanad</p>
      </div>
    </footer>
  );
};

export default Footer;
