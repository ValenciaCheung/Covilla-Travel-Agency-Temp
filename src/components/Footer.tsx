"use client";

export function Footer() {
  const destinations = [
    { name: "France", href: "/location/france" },
    { name: "Indonesia", href: "/location/indonesia" },
    { name: "Greece", href: "/location/greece" },
    { name: "Egypt", href: "/location/egypt" },
  ];

  const links = [
    { name: "DESTINATIONS", href: "http://localhost:3000/" },
    { name: "FRANCE", href: "http://localhost:3000/location/france/" },
    { name: "INDONESIA", href: "http://localhost:3000/location/indonesia/" },
    { name: "GREECE", href: "http://localhost:3000/location/greece/" },
    { name: "EGYPT", href: "http://localhost:3000/location/egypt/" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Brand and Footer Links */}
          <div className="flex flex-wrap justify-between items-center gap-6 mb-8">
            <div className="flex flex-wrap justify-start items-center gap-6">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight mr-8">
                COVILLA
              </h2>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900 font-medium tracking-wider uppercase transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500">© 2025 COVILLA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
