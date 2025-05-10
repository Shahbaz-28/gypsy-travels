"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const menuItems = [
  { title: "Home", href: "/" },
  {
    title: "Tours",
    items: [
      { title: "International Tours", href: "/international", description: "Explore destinations around the world" },
      { title: "Domestic Tours", href: "/domestic", description: "Discover the beauty of local destinations" },
    ],
  },
  { title: "About Us", href: "/about" },
  { title: "Corporate", href: "/corporate" },
  { title: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
    setActiveSubmenu(null)
  }

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <span className="text-3xl font-bold text-[#0069A8] tracking-tighter font-serif">
              Gypsy
            </span>
            <span className="ml-1 text-xs font-medium text-slate-600 uppercase tracking-wider">
              Travels
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger 
                          className="bg-white text-slate-800 hover:text-[#0069A8] font-medium px-4 py-2"
                        >
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
                                    <span className="font-medium text-slate-900">
                                      {subItem.title}
                                    </span>
                                    <span className="text-sm text-slate-500 mt-1">
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
                        className="px-4 py-2 text-slate-800 hover:text-[#0069A8] font-medium transition-colors"
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
                className="text-slate-600 hover:text-[#0069A8] transition-colors"
                aria-label="Facebook"
                legacyBehavior={false}
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-600 hover:text-[#0069A8] transition-colors"
                aria-label="Instagram"
                legacyBehavior={false}
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>

            <Button className="bg-[#0069A8] hover:bg-[#005a8f] text-white rounded-full px-6">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-800 hover:bg-gray-100 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                <div key={item.title} className="w-full py-3 border-b border-gray-100">
                  {item.items ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-left text-lg font-medium text-slate-800"
                        onClick={() => toggleSubmenu(item.title)}
                        aria-expanded={activeSubmenu === item.title}
                      >
                        {item.title}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            activeSubmenu === item.title ? "rotate-180" : ""
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
                              <div className="font-medium">{subItem.title}</div>
                              <div className="text-sm text-gray-500 mt-1">
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
                      className="block text-lg font-medium text-slate-800 py-2"
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              <div className="w-full pt-6">
                <Button className="w-full bg-[#0069A8] hover:bg-[#005a8f] text-white rounded-full py-4">
                  Book Now
                </Button>
              </div>

              <div className="mt-6 flex items-center justify-center w-full space-x-6 pt-6 border-t border-gray-100">
                <Link href="#" className="text-gray-500 hover:text-[#0069A8]">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#0069A8]">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-[#0069A8]">
                  <Twitter className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}