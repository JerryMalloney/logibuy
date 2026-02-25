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
  { label: "Inicio", href: "#" },
  { label: "Sobre nosotros", href: "#" },
  { label: "Calculadora de Envios", href: "#" },
  { label: "Contactanos", href: "#" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
];

const Footer = () => {
  return (
    <footer className="bg-brand-primary px-4 py-10 text-white md:py-14">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-8">
          <Image src="/logo.svg" alt="Logibuy logo" width={190} height={90} />

          <div className="space-y-4 text-2xl text-white/90">
            <p className="flex items-center gap-3">
              <Phone className="size-5" />
              +1 (800) 123-4567
            </p>
            <p className="flex items-center gap-3">
              <Mail className="size-5" />
              support@24VoltOn.com
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5" />
              C/ Pintor Gisbert 4, bajo dcha 46006 Valencia, Spain
            </p>
          </div>

          <div className="flex items-center gap-3">
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

          <p className="text-lg text-white/80">
            Logibuy LTD - Lorem ipsum dolor sit amet, consec
          </p>
        </div>

        <div className="flex flex-col justify-between md:items-end">
          <nav aria-label="Footer navigation" className="space-y-5 text-4xl">
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

          <p className="text-lg text-white/80">
            Copyright © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
