import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Clock,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-26">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-emerald-700 text-center mb-4">
              Get in Touch
            </h1>
            <p className="text-center text-emerald-600/80 max-w-2xl mx-auto">
              We're here to help plan your perfect adventure. Reach out to us
              through any of the methods below, and we'll get back to you as
              soon as possible!
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-5 min-h-[500px]">
              {/* Left Sidebar */}
              <div className="md:col-span-2 bg-gradient-to-br from-emerald-600 to-green-500 p-8 text-white">
                <h2 className="text-2xl font-semibold mb-6">How to Reach Us</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-white/80 text-sm font-medium mb-3">
                      BUSINESS HOURS
                    </h3>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 shrink-0 mt-0.5" />
                      <div>
                        <p>Monday - Friday: 9AM - 6PM</p>
                        <p>Saturday: 10AM - 4PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-white/20" />

                  <div>
                    <h3 className="text-white/80 text-sm font-medium mb-3">
                      VISIT OUR OFFICE
                    </h3>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                      <p>
                        Shop No-03, Meera Apartment Belavali Badlapur west 421503
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-white/20" />

                  <div>
                    <h3 className="text-white/80 text-sm font-medium mb-3">
                      Contact US
                    </h3>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      <p>9768401031 / 8010801839</p>
                    </div>
                  </div>

                  <Separator className="bg-white/20" />

                  <div>
                    <h3 className="text-white/80 text-sm font-medium mb-3">
                      FOLLOW US
                    </h3>
                    <div className="flex items-center gap-4">
                      <Link
                        href="#"
                        className="hover:text-white/80 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link
                        href="#"
                        className="hover:text-white/80 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="md:col-span-3 p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Start a Conversation</h2>

                  <div className="flex flex-col items-center">
                    <div className="mb-6 text-center">
                      <div className="inline-flex items-center gap-3 text-gray-800 mb-3 justify-center">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="font-semibold text-lg">WhatsApp Us</span>
                      </div>
                      <p className="text-emerald-600/80 text-base">Scan the QR code or click to chat instantly</p>
                    </div>

                    <div className="border-4 border-green-100 rounded-2xl p- bg-green-50 mb-8 shadow-lg mx-auto">
                      <Image
                        src="/images/whatsapp.png"
                        alt="WhatsApp QR Code"
                        width={200}
                        height={200}
                        className="mx-auto rounded-lg"
                      />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Button
                        asChild
                        size="lg"
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white rounded-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <a
                          href="https://wa.link/fmxykw"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3"
                        >
                          <MessageSquare className="h-5 w-5" />
                          Chat on WhatsApp
                        </a>
                      </Button>

                      <p className="text-center text-sm text-emerald-600/70 mt-4 font-medium">
                        Available Monday-Friday, 9AM-6PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}