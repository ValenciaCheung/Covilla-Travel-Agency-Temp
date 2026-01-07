"use client";

import Link from "next/link";

export function Footer() {
  const destinations = [
    { name: "France", href: "/location/france" },
    { name: "Indonesia", href: "/location/indonesia" },
    { name: "Greece", href: "/location/greece" },
    { name: "Egypt", href: "/location/egypt" },
  ];

  const links = [
    { name: "DESTINATIONS", href: "/" },
    { name: "FRANCE", href: "/location/france/" },
    { name: "INDONESIA", href: "/location/indonesia/" },
    { name: "GREECE", href: "/location/greece/" },
    { name: "EGYPT", href: "/location/egypt/" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Brand and Footer Links */}
          <div className="flex flex-wrap justify-between items-center gap-6 mb-8">
            <div className="flex flex-wrap justify-start items-center gap-6">
              <Link href="/" aria-label="Home" className="mr-8">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  COVILLA
                </h2>
              </Link>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium tracking-wider uppercase transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500">© 2025 COVILLA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
