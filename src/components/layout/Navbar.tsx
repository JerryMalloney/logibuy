"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import CustomButton1 from "../buttons/CustomButton1";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "#" },
  { label: "Page", href: "#" },
  { label: "Contact Us", href: "#" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-brand-primary/60 border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-2">
          <div className="md:flex md:items-center md:gap-12 max-md:flex-1">
            <a className="block text-teal-600" href="#">
              <Image src="/logo.svg" alt="Logo" width={150} height={150} />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-base">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      className="text-white transition hover:text-white/75"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <CustomButton1 link="/" text="Lets Connect" />
            </div>

            <div className="block md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="rounded-md border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
                  >
                    <Menu className="size-5" />
                    <span className="sr-only">Open menu</span>
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[86%] border-l border-white/15 bg-brand-primary p-0 text-white"
                >
                  <div className="flex h-full flex-col">
                    <SheetHeader className="border-b border-white/10 px-5 py-4 pr-12">
                      <Image
                        src="/logo.svg"
                        alt="Logibuy"
                        width={120}
                        height={36}
                      />
                      <SheetTitle className="mt-2 text-white">Menu</SheetTitle>
                      <SheetDescription className="text-white/70">
                        Navigate through Logibuy sections.
                      </SheetDescription>
                    </SheetHeader>

                    <nav aria-label="Mobile navigation" className="px-4 py-5">
                      <ul className="space-y-2">
                        {navLinks.map((link) => (
                          <li key={link.label}>
                            <SheetClose asChild>
                              <Link
                                href={link.href}
                                className="block rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
                              >
                                {link.label}
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    </nav>

                    <div className="mt-auto border-t border-white/10 p-5">
                      <SheetClose asChild>
                        <Link
                          href="/"
                          className="inline-flex w-full items-center justify-center rounded-full bg-brand-secondary px-5 py-3 text-sm font-semibold text-white"
                        >
                          Lets Connect
                        </Link>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
