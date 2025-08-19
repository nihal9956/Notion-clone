// NotionFooter.tsx
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => (
  <footer className="notion-footer">
    <div className="notion-footer__container">
      {/* Left: Logo & social icons */}
      <div className="notion-footer__brand">
        <div className="notion-footer__logo">
          {/* Notion logo SVG */}
          <Image src={'/notion.png'} width={30} height={30} alt='logo'/>
          <span className="notion-footer__logo-text">Notion</span>
        </div>
        <div className="notion-footer__social">
          <a href="#" aria-label="Instagram" className="notion-footer__icon"><svg width="18" height="18" fill="currentColor"><circle cx="9" cy="9" r="7" stroke="#222" strokeWidth="1.3" fill="none"/><circle cx="9" cy="9" r="4" stroke="#222" strokeWidth="1.1" fill="none"/><circle cx="12" cy="6" r="1" fill="#222"/></svg></a>
          <a href="#" aria-label="X" className="notion-footer__icon"><svg width="18" height="18" fill="currentColor"><path d="M3 15L15 3M3 3l12 12" stroke="#222" strokeWidth="1.4"/></svg></a>
          <a href="#" aria-label="LinkedIn" className="notion-footer__icon"><svg width="18" height="18" fill="currentColor"><rect x="2" y="5" width="3" height="11" fill="#222"/><circle cx="3.5" cy="3.5" r="1.5" fill="#222"/><rect x="7" y="8" width="3" height="8" fill="#222"/><rect x="11" y="11" width="3" height="5" fill="#222"/></svg></a>
          <a href="#" aria-label="Facebook" className="notion-footer__icon"><svg width="18" height="18" fill="currentColor"><circle cx="9" cy="9" r="8" stroke="#222" strokeWidth="1.1" fill="none"/><rect x="8" y="6" width="2" height="6" fill="#222"/><rect x="7" y="10" width="4" height="2" fill="#222"/></svg></a>
          <a href="#" aria-label="YouTube" className="notion-footer__icon"><svg width="18" height="18" fill="currentColor"><rect x="3" y="6" width="12" height="6" rx="1" fill="none" stroke="#222" strokeWidth="1.1"/><polygon points="9 8 11 9 9 10" fill="#222"/></svg></a>
        </div>
        {/* Language selector and copyright */}
        <div className="notion-footer__lang-copyright">
          <div className="notion-footer__lang">
            <button type="button">🌐 English (US) ▼</button>
          </div>
          <span className="notion-footer__cookie">Cookie settings</span>
          <div className="notion-footer__copyright">© 2025 Notion Labs, Inc.</div>
        </div>
      </div>
      {/* Right: Link columns */}
      <div className="notion-footer__links">
        <div>
          <span className="notion-footer__heading">Company</span>
          <a href="#">About us</a>
          <a href="#">Careers</a>
          <a href="#">Security</a>
          <a href="#">Status</a>
          <a href="#">Terms & privacy</a>
          <a href="#">Your privacy rights</a>
        </div>
        <div>
          <span className="notion-footer__heading">Download</span>
          <a href="#">iOS & Android</a>
          <a href="#">Mac & Windows</a>
          <a href="#">Calendar</a>
          <a href="#">Web Clipper</a>
        </div>
        <div>
          <span className="notion-footer__heading">Resources</span>
          <a href="#">Help center</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Community</a>
          <a href="#">Integrations</a>
          <a href="#">Templates</a>
          <a href="#">Affiliates</a>
        </div>
        <div>
          <span className="notion-footer__heading">Notion for</span>
          <a href="#">Enterprise</a>
          <a href="#">Small business</a>
          <a href="#">Personal</a>
          <a href="#" className="notion-footer__explore">Explore more →</a>
        </div>
      </div>
    </div>
  </footer>
);


export default Footer