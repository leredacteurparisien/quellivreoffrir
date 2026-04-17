"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/quiz", label: "Quiz" },
    { href: "/blog", label: "Blog" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      style={{ backgroundColor: "#1c2b30" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo-quellivreoffrir-avec-texte.svg"
              alt="Quel livre offrir ?"
              width={100}
              height={40}
              priority
              className="group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "#c8d8db" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#4a9bb0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#c8d8db")
                }
              >
                {link.label}
              </Link>
            ))}
            <Link href="/quiz" className="btn-primary text-sm py-2 px-5">
              Commencer le quiz
            </Link>
          </nav>

          {/* Burger mobile */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-4"
          style={{ backgroundColor: "#243540", borderColor: "#2a6b7c" }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: "#c8d8db" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            className="btn-primary text-sm text-center"
            onClick={() => setMenuOpen(false)}
          >
            Commencer le quiz
          </Link>
        </div>
      )}
    </header>
  );
}
