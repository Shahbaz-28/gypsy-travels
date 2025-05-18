import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a3d62] text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-white">Gypsy Travels</div>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Discover extraordinary destinations and unforgettable experiences with our handpicked selection of tours
              around the world.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              {/* <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-300 hover:text-white transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Tour Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tours/adventure" className="text-gray-300 hover:text-white transition-colors">
                  Adventure Tours
                </Link>
              </li>
              <li>
                <Link href="/tours/cultural" className="text-gray-300 hover:text-white transition-colors">
                  Cultural Tours
                </Link>
              </li>
              <li>
                <Link href="/tours/beach" className="text-gray-300 hover:text-white transition-colors">
                  Beach Vacations
                </Link>
              </li>
              <li>
                <Link href="/tours/honeymoon" className="text-gray-300 hover:text-white transition-colors">
                  Honeymoon Packages
                </Link>
              </li>
              {/* <li>
                <Link href="/tours/wildlife" className="text-gray-300 hover:text-white transition-colors">
                  Wildlife Safaris
                </Link>
              </li>
              <li>
                <Link href="/tours/cruise" className="text-gray-300 hover:text-white transition-colors">
                  Cruise Tours
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="text-gray-300">123 Travel Street, Tourism City, Country</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <Link href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-890
                </Link>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <Link href="mailto:info@gypsytravels.com" className="text-gray-300 hover:text-white transition-colors">
                  info@gypsytravels.com
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              {/* <h4 className="font-medium mb-3">Subscribe to our newsletter</h4> */}
              {/* <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 text-white placeholder:text-gray-400 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#0077b6] w-full"
                />
                <button className="bg-[#0077b6] hover:bg-[#005b8a] px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Gypsy Travels. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
