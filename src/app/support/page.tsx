"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isOpen, setIsOpen] = useState(false);
  const [heroHeight, setHeroHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const compute = () => {
      const el = document.getElementById("support-hero");
      if (el) {
        const rect = el.getBoundingClientRect();
        const base = rect.height || window.innerHeight * 0.3;
        setHeroHeight(Math.round(base * 2));
      } else {
        setHeroHeight(Math.round(window.innerHeight * 0.6));
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const validate = (data: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!data.firstName) e.firstName = "Required";
    if (!data.lastName) e.lastName = "Required";
    if (!data.email) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid";
    if (!data.phone) e.phone = "Required";
    if (!data.message) e.message = "Required";
    return e;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };
    const eMap = validate(data);
    setErrors(eMap);
    if (Object.keys(eMap).length === 0) {
      setIsOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero header - match Journal layout */}
      <section
        id="support-hero"
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: heroHeight ? `${heroHeight}px` : undefined,
          backgroundImage:
            "url('https://cdn.prod.website-files.com/60675f13ea324fdd4af9ef2a/607503213f245d75fcd95368_Travel002.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-6 text-center py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Have a question?</h1>
          <p className="text-white text-lg">Contact us</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-900">Name</label>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input name="firstName" placeholder="First name" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400" />
                      <input name="lastName" placeholder="Last name" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400" />
                    </div>
                    <div className="mt-1 text-xs text-red-500">{errors.firstName || errors.lastName}</div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-900">Email</label>
                    <input name="email" placeholder="Your email" className="mt-3 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400" />
                    <div className="mt-1 text-xs text-red-500">{errors.email}</div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-900">Phone</label>
                    <input name="phone" placeholder="(555) 555-5555" className="mt-3 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400" />
                    <div className="mt-1 text-xs text-red-500">{errors.phone}</div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-900">Message</label>
                    <textarea name="message" placeholder="Your message" rows={5} className="mt-3 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400" />
                    <div className="mt-1 text-xs text-red-500">{errors.message}</div>
                  </div>
                  <Button type="submit" className="w-full h-12 rounded-md bg-blue-600 hover:bg-blue-700 text-white tracking-widest">SUBMIT</Button>
                </form>
              </div>
            </div>
            <aside>
              <div className="space-y-4">
                <span className="text-sm font-medium tracking-wider uppercase text-gray-500">Quick links</span>
                <div className="space-y-3">
                  <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">Schedule a call</a>
                  <a href="mailto:info@template.com" className="block p-4 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">info@template.com</a>
                  <a href="facetime:(555) 555-5555" className="block p-4 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">(555) 555-5555</a>
                </div>
                <div className="mt-8 space-y-3">
                  <span className="text-sm font-medium tracking-wider uppercase text-gray-500">Contact us</span>
                  <div className="space-y-3">
                    <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">Schedule a call</a>
                    <a href="mailto:info@template.com" className="block p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">info@template.com</a>
                    <a href="facetime:(555) 555-5555" className="block p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">(555) 555-5555</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden w-full">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://ext.same-assets.com/1081758887/2041208434.jpeg')" }}>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Let's talk</h2>
            <h3 className="text-xl md:text-2xl mb-4">Contact a travel agent directly, today</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md bg-white text-gray-900 hover:bg-gray-100">Schedule a call</a>
              <a href="mailto:info@template.com" className="px-6 py-3 rounded-md border border-white text-white hover:bg-white/10">Email us</a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-10 w-full max-w-md mx-auto bg-white rounded-xl shadow-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thanks for reaching out</h3>
            <p className="text-gray-600 mb-4">Our travel agent will contact you shortly.</p>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                className="rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
