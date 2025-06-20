"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Tours",
    items: [
      {
        title: "International Tours",
        href: "/international",
        description: "Explore destinations around the world",
      },
      {
        title: "Domestic Tours",
        href: "/domestic",
        description: "Discover the beauty of local destinations",
      },
    ],
  },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 shadow-sm",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 h-[64px]">
            {" "}
            {/* Navbar height */}
            <div className="relative w-[120px] h-[110px]">
              {" "}
              {/* Fixed size container */}
              <Image
                src="/images/logo1.png"
                alt="Gypsy Travels Logo"
                fill // this makes the image stretch to fit the div
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 ">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="relative text-gray-900 font-medium px-4 py-2 
  after:content-[''] after:absolute after:bottom-0 
  after:left-1/2 after:-translate-x-1/2 after:w-0 
  after:h-[2px] after:bg-gray-600 hover:after:w-3/5 
  after:transition-all after:duration-300">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white rounded-md shadow-lg border border-gray-100">
                          <ul className="grid w-[400px] gap-1 p-2">
                            {item.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="flex flex-col p-3 hover:bg-gray-50 rounded-md transition-colors"
                                    onClick={handleLinkClick}
                                  >
                                    <span className="text-base leading-relaxed text-gray-900">
                                      {subItem.title}
                                    </span>
                                    <span className="text-sm text-gray-500 italic mt-1">
                                      {subItem.description}
                                    </span>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="relative text-gray-600 font-medium px-4 py-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-gray-600 hover:after:w-4/5 after:transition-all after:duration-300"
                        legacyBehavior={false}
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Social Media & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors"
                aria-label="Facebook"
                legacyBehavior={false}
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                  href="https://www.instagram.com/explorewithgypsy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
            </div>

            <Button className="cursor-pointer bg-gradient-to-br from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 text-white rounded-full px-6 shadow-md transition-all duration-300">

              <a
                href="https://wa.link/fmxykw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                Book Now
              </a>

            </Button>


          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-100 hover:bg-green-700 bg-green-800 shadow-md z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto lg:hidden pt-20"
          >
            <div className="container flex flex-col items-start justify-start h-full px-6 pb-20 space-y-1">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="w-full py-3 border-b border-gray-100"
                >
                  {item.items ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-left text-base leading-relaxed text-gray-900"
                        onClick={() => toggleSubmenu(item.title)}
                        aria-expanded={activeSubmenu === item.title}
                      >
                        {item.title}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${activeSubmenu === item.title ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {activeSubmenu === item.title && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block py-2 px-3 rounded-md hover:bg-gray-50"
                              onClick={handleLinkClick}
                            >
                              <div className="text-base leading-relaxed text-gray-900">{subItem.title}</div>
                              <div className="text-sm text-gray-500 italic mt-1">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-base leading-relaxed text-gray-900 py-2"
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              <div className="w-full pt-6">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-4">
                  <a
                    href="https://wa.link/fmxykw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    Book Now
                  </a>

                </Button>

              </div>

              <div className="mt-6 flex items-center justify-center w-full space-x-6 pt-6 border-t border-gray-100">
                <Link href="#" className="text-gray-500 hover:text-green-600">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.instagram.com/explorewithgypsy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600"
                >
                  <Instagram className="h-6 w-6" />
                </Link>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
