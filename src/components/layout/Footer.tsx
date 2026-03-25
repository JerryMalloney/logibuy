import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";
import { BsInstagram } from "react-icons/bs";

const navigationLinks = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nosotros", href: "/about" },
  { label: "Calculadora de Envios", href: "/calculadora" },
  { label: "Contactanos", href: "/contact" },
];

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69A4.83 4.83 0 0 1 16 5.13V16a6 6 0 1 1-6-6c.34 0 .67.03 1 .08v3.06a3 3 0 1 0 2 2.83V0h3a4.85 4.85 0 0 0 4.85 4.85v1.84c-.43 0-.85-.04-1.26-.12Z" />
  </svg>
);

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/logibuyltd/",
    icon: BsInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@miguelmendo19",
    icon: TikTokIcon,
  },
];

const Footer = () => {
  return (
    <footer
      id="contacto"
      className="bg-linear-to-l to-[#122B86] from-[#020447]  px-4 py-10 text-white md:py-14"
    >
      <div className="container mx-auto space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-6">
            <Image
              src="/logo.svg"
              alt="Logibuy logo"
              width={190}
              height={90}
              className="aspect-auto"
            />

            <div className="space-y-4 text-white/90">
              <p className="flex items-center gap-3 text-sm sm:text-base">
                <Phone className="size-5 shrink-0" />
                <a
                  href={contactInfo.phoneHref}
                  className="transition hover:text-white/75"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </p>
              <p className="flex items-start gap-3 text-sm sm:text-base">
                <MapPin className="mt-0.5 size-5 shrink-0" />
                <span>
                  <span className="block">{contactInfo.addressCn}</span>
                  <span className="block text-white/75">
                    {contactInfo.addressEn}
                  </span>
                </span>
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
                    target="_blank"
                    rel="noreferrer"
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
            <p>Logibuy LTD | Operaciones logísticas desde Yiwu, China.</p>
            <p>Copyright © 2026. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
