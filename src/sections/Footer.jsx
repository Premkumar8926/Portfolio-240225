import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-4 border-t border-black-300 flex flex-col md:flex-row md:justify-between items-center gap-5">
      {/* Terms & Copyright */}
      <div className="text-sm md:text-base flex flex-row md:flex-col gap-1">
        <div className="text-white-500 flex flex-wrap gap-2">
          <p>Terms & Conditions</p>
          <p className="block md:hidden">|</p>
        </div>
        <p className="text-white-500">
          &copy; 2025 Prem Kumar D. All rights reserved.
        </p>
      </div>

      {/* Made with Love */}
      <div className="flex flex-col items-center gap-3">
        <div className="text-white-500 flex items-center gap-2">
          <p>Made with</p>
          <img className="w-4 h-4" src="/assets/heart.png" alt="heart icon" />
          <p>and</p>
          <img className="w-4 h-4" src="/assets/coffee-cup.png" alt="coffee" />
          <p>by Prem Kumar D</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-white-600">Built on React</p>
          <img
            className="w-6 h-6 spin"
            src="/assets/react.svg"
            alt="React spinning icon"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-3 justify-center mb-2 md:mb-0 md:justify-end">
        <div className="social-icon">
          <a
            href={import.meta.env.VITE_APP_GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/github.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href={import.meta.env.VITE_APP_INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/instagram.svg"
              alt="Instagram"
              className="w-5 h-5"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href={import.meta.env.VITE_APP_LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/linkedin.png"
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
