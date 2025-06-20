import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Content */}
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-slate-100 p-6 md:p-8">
          <div className="prose max-w-none">
            <p className="text-slate-500 mb-8">Last Updated: May 21, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">1. Introduction</h2>
              <p className="mb-4">
                At Gypsy Travels, we respect your privacy and are committed to protecting your personal data. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">2.1 Personal Information</h3>
              <p className="mb-4">
                We may collect personal information that you provide directly to us, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Date of birth and gender</li>
                <li>Passport details and other identification information</li>
                <li>Payment information and billing address</li>
                <li>Travel preferences and special requirements</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">2.2 Automatically Collected Information</h3>
              <p className="mb-4">
                When you visit our website, we may automatically collect certain information about your device,
                including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>IP address and browser type</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on those pages</li>
                <li>Referring website addresses</li>
                <li>Geographic location</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We may use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Processing and confirming your travel bookings</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending administrative information, updates, and promotional content</li>
                <li>Personalizing your experience and delivering tailored content</li>
                <li>Improving our website, products, and services</li>
                <li>Complying with legal obligations and protecting our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">4. Disclosure of Your Information</h2>
              <p className="mb-4">We may share your information with third parties in the following situations:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  With service providers and business partners necessary to provide our services (hotels, airlines, tour
                  operators, etc.)
                </li>
                <li>To comply with legal obligations, enforce our terms, and protect our rights</li>
                <li>In connection with a business transaction such as a merger, acquisition, or sale of assets</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain
                information. Cookies are files with a small amount of data that may include an anonymous unique
                identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">6. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the
                security of any personal information we process. However, please note that no electronic transmission or
                storage of information can be entirely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">7. Your Data Protection Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification if your information is inaccurate or incomplete</li>
                <li>The right to object to our processing of your personal data</li>
                <li>The right to request restriction of processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children. If we learn we have collected personal information from a child without
                parental consent, we will delete that information as quickly as possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-600 mb-4">10. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <address className="not-italic">
                <p>Gypsy Travels</p>
                <p>350 Adventure Avenue, Suite 120</p>
                <p>Travelton, CA 94103</p>
                <p>Email: privacy@gypsytravels.com</p>
                <p>Phone: +1-555-234-5678</p>
              </address>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
