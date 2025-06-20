import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function TermsConditionsPage() {
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
                Welcome to Gypsy Travels. These Terms and Conditions govern your use of our website, services, and
                products. By accessing or using our services, you agree to be bound by these Terms. Please read them
                carefully.
              </p>
              <p>If you do not agree with any part of these terms, you may not use our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">2. Definitions</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>"Company"</strong> refers to Gypsy Travels, its subsidiaries, affiliates, and partners.
                </li>
                <li>
                  <strong>"Services"</strong> refers to all travel services, packages, accommodations, transportation,
                  and related services offered by the Company.
                </li>
                <li>
                  <strong>"User"</strong> or <strong>"You"</strong> refers to individuals who access or use our
                  services.
                </li>
                <li>
                  <strong>"Website"</strong> refers to gypsytravels.com and all related domains and subdomains.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">3. Booking and Payments</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">3.1 Booking Process</h3>
              <p className="mb-4">
                All bookings are subject to availability and confirmation. A booking is confirmed only after receipt of
                the required deposit or full payment and written confirmation from the Company.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">3.2 Payment Terms</h3>
              <p className="mb-4">
                A non-refundable deposit of 25% of the total tour cost is required at the time of booking. The remaining
                balance must be paid 60 days prior to the departure date. For bookings made within 60 days of departure,
                full payment is required at the time of booking.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">3.3 Payment Methods</h3>
              <p>
                We accept payments via credit card, debit card, bank transfer, and other methods as specified on our
                website. All payments must be made in the currency specified in your booking confirmation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">4. Cancellations and Refunds</h2>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">4.1 Cancellation by Customer</h3>
              <p className="mb-4">Cancellations must be made in writing. The following cancellation fees apply:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>More than 60 days before departure: Loss of deposit</li>
                <li>59-30 days before departure: 50% of total tour cost</li>
                <li>29-15 days before departure: 75% of total tour cost</li>
                <li>14 days or less before departure: 100% of total tour cost</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">4.2 Cancellation by Company</h3>
              <p>
                The Company reserves the right to cancel any tour due to insufficient participation, force majeure, or
                other unforeseen circumstances. In such cases, a full refund will be provided, or an alternative tour
                may be offered. The Company is not responsible for any incidental expenses incurred by customers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">5. Travel Insurance</h2>
              <p>
                Travel insurance is strongly recommended for all travelers. The insurance should cover trip
                cancellation, delays, medical expenses, emergency evacuation, and personal liability. The Company is not
                responsible for any losses, damages, or expenses that would have been covered by travel insurance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">6. Passport, Visa, and Health Requirements</h2>
              <p>
                It is the responsibility of the traveler to ensure they have valid travel documents, including
                passports, visas, and health certificates as required by the destination countries. The Company is not
                liable for any issues arising from inadequate travel documentation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">7. Limitation of Liability</h2>
              <p>
                The Company acts as an agent for transportation companies, hotels, and other service providers and is
                not liable for any injury, damage, loss, accident, delay, or irregularity that may be caused by defect
                or default of any company or person engaged in providing the services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-600 mb-4">8. Changes to Terms and Conditions</h2>
              <p>
                The Company reserves the right to modify these Terms and Conditions at any time. Changes will be
                effective immediately upon posting on our website. It is your responsibility to review these Terms
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-600 mb-4">9. Contact Information</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
              <address className="not-italic mt-2">
                <p>Gypsy Travels</p>
                <p>350 Adventure Avenue, Suite 120</p>
                <p>Travelton, CA 94103</p>
                <p>Email: legal@gypsytravels.com</p>
                <p>Phone: +1-555-234-5678</p>
              </address>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
