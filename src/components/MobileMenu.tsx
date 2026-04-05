"use client";

import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  /* Lock body scroll when open */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#1B1B1B] flex flex-col px-4 pt-4 pb-8 transition-opacity duration-300 md:hidden ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button — top right */}
      <div className="flex justify-end">
        <button
          aria-label="Close menu"
          className="p-2"
          onClick={onClose}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A0A1A1"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <nav className="mt-6 ml-4 space-y-4">
        <a
          href="#articles"
          className="block text-heading-orange font-sans font-medium text-[16px]"
          onClick={onClose}
        >
          Article
        </a>
        <a
          href="/contact"
          className="block text-heading-orange font-sans font-medium text-[16px]"
          onClick={onClose}
        >
          Contact
        </a>
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Social footer */}
      <div className="border-t border-heading-orange/60 pt-4 mx-4">
        <div className="flex flex-col items-center gap-2">
          <nav className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/barbara-odusola-stevenson/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-social-brown text-[12px] font-medium"
            >
              Linkedin
            </a>
            <a
              href="https://medium.com/@barbara-stevenson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-social-brown text-[12px] font-medium"
            >
              Medium
            </a>
          </nav>
          <a
            href="mailto:Barbarastevenson.design@gmail.com"
            className="text-social-brown text-[12px] font-medium"
          >
            Barbarastevenson.design@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
