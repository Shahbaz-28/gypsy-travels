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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-22">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-center text-[#0066a6] mb-4">
              Get in Touch
            </h1>
            <p className="text-center text-slate-600 max-w-2xl mx-auto">
              We're here to help plan your perfect adventure. Reach out to us
              through any of the methods below, and we'll get back to you as
              soon as possible!
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-5 min-h-[500px]">
              {/* Left Sidebar */}
              <div className="md:col-span-2 bg-[#0066a6] p-8 text-white">
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
                        350 Adventure Avenue, Suite 120, Travelton, CA 94103
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-white/20" />

                  <div>
                    <h3 className="text-white/80 text-sm font-medium mb-3">
                      EMAIL US
                    </h3>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5" />
                      <p>info@gypsytravels.com</p>
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
                      <Link
                        href="#"
                        className="hover:text-white/80 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href="#"
                        className="hover:text-white/80 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="md:col-span-3 p-8">
                <Tabs defaultValue="team" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger className=" cursor-pointer" value="chat">
                      Quick Connect
                    </TabsTrigger>
                    <TabsTrigger className=" cursor-pointer" value="team">
                      Our Team
                    </TabsTrigger>{" "}
                  </TabsList>

                  <TabsContent value="team" className="space-y-6">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                      Meet Our Team
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-slate-50 rounded-lg p-4 flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#e6f3fa] flex items-center justify-center text-[#0066a6] font-bold text-lg">
                          AJ
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-800">
                            Alex Johnson
                          </h3>
                          <p className="text-sm text-slate-500">
                            Travel Consultant
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Phone className="h-4 w-4 text-slate-400" />
                            <span className="text-sm">+1-555-234-5678</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-lg p-4 flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#e6f3fa] flex items-center justify-center text-[#0066a6] font-bold text-lg">
                          MT
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-800">
                            Maria Torres
                          </h3>
                          <p className="text-sm text-slate-500">
                            Adventure Specialist
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Phone className="h-4 w-4 text-slate-400" />
                            <span className="text-sm">+1-555-876-5432</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-lg p-4 flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#e6f3fa] flex items-center justify-center text-[#0066a6] font-bold text-lg">
                          RK
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-800">
                            Ryan Kim
                          </h3>
                          <p className="text-sm text-slate-500">
                            Customer Support
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Phone className="h-4 w-4 text-slate-400" />
                            <span className="text-sm">+1-555-345-6789</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-lg p-4 flex items-start gap-4">
                        <div className="h-12 w-12 rounded-full bg-[#e6f3fa] flex items-center justify-center text-[#0066a6] font-bold text-lg">
                          JD
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-800">
                            Jamie Davis
                          </h3>
                          <p className="text-sm text-slate-500">
                            Booking Manager
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Phone className="h-4 w-4 text-slate-400" />
                            <span className="text-sm">+1-555-987-6543</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="chat" className="space-y-6">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                      Start a Conversation
                    </h2>

                    <div className="flex flex-col items-center">
                      <div className="mb-4 text-center">
                        <div className="inline-flex items-center gap-2 text-slate-700 mb-2">
                          <MessageSquare className="h-5 w-5 text-[#0066a6]" />
                          <span className="font-medium">WhatsApp Us</span>
                        </div>
                        <p className="text-slate-500 text-sm">
                          Scan the QR code or click to chat
                        </p>
                      </div>

                      <div className="border-4 border-[#e6f3fa] rounded-xl p-2 bg-white mb-6">
                        <Image
                          src="/images/whatsap.png"
                          alt="Chat QR Code"
                          width={180}
                          height={180}
                          className="mx-auto"
                        />
                      </div>

                      <div className="w-full max-w-xs">
                        <Button className="w-full bg-[#0066a6] hover:bg-[#00558c]">
                          <a
                            href="https://wa.link/moczy6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#0066a6] hover:bg-[#00558c] text-white flex items-center justify-center px-4 py-2 rounded"
                          >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Chat on WhatsApp
                          </a>
                        </Button>

                        <p className="text-center text-xs text-slate-500 mt-3">
                          Available Monday-Friday, 9AM-6PM
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
