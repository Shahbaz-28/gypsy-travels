import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-green-900 to-green-800 text-gray-100">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo1.png"
              alt="Roamers Holidays Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </Link>
          <p className="mt-4 text-sm text-white/80 italic">Tour with Gypsy</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Legal</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><Link href="/terms-conditions" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <Facebook className="h-5 w-5 text-white" />
            </Link>
            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <Instagram className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-4 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Gypsy Tours. All rights reserved.
      </div>
    </footer>
  );
}
