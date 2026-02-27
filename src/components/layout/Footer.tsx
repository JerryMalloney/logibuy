import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nosotros", href: "/about" },
  { label: "Calculadora de Envios", href: "/about" },
  { label: "Contactanos", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://x.com", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
];

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-brand-primary px-4 py-10 text-white md:py-14"
    >
      <div className="container mx-auto space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-6">
            <Image src="/logo.svg" alt="Logibuy logo" width={190} height={90} />

            <div className="space-y-4 text-white/90">
              <p className="flex items-center gap-3 text-sm sm:text-base">
                <Phone className="size-5 shrink-0" />
                +1 (800) 123-4567
              </p>
              <p className="flex items-center gap-3 text-sm sm:text-base">
                <Mail className="size-5 shrink-0" />
                support@24VoltOn.com
              </p>
              <p className="flex items-start gap-3 text-sm sm:text-base">
                <MapPin className="mt-0.5 size-5 shrink-0" />
                C/ Pintor Gisbert 4, bajo dcha 46006 Valencia, Spain
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex size-10 items-center justify-center rounded-full bg-black/35 text-white transition hover:bg-black/50"
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-6 md:justify-self-end md:text-right">
            <nav
              aria-label="Footer navigation"
              className="space-y-4 text-2xl md:text-3xl"
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block transition hover:text-white/75"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-white/80 sm:text-base">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>Logibuy LTD - Lorem ipsum dolor sit amet, consec</p>
            <p>Copyright © 2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
