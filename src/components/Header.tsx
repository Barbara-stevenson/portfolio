"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="hidden md:flex items-center justify-end px-[54px] pt-10 pb-0">
      <nav className="flex items-center gap-nav">
        <Link
          href="/"
          className="text-nav font-medium text-dark-text hover:text-heading-orange transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-nav font-medium text-dark-text hover:text-heading-orange transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-nav font-medium text-dark-text hover:text-heading-orange transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
