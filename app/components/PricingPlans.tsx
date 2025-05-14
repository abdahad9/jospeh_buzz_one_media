import Link from "next/link";

const plans = [
  {
    name: "Starter Plan",
    price: "$499/month",
    features: [
      "SEO Optimization for 5 pages",
      "Social Media Management (2 platforms)",
      "Content Creation: 4 blog posts/month",
      "Monthly Performance Report",
    ],
    button: "Choose Plan",
    highlight: false,
    enterprise: false,
  },
  {
    name: "Growth Plan",
    price: "$999/month",
    features: [
      "SEO Optimization for 10 pages",
      "Social Media Management (3 platforms)",
      "Content Creation: 8 blog posts/month",
      "Google Ads Setup & Management",
      "Bi-Weekly Performance Analysis",
    ],
    button: "Choose Plan",
    highlight: false,
    enterprise: false,
  },
  {
    name: "Premium Plan",
    price: "$1,499/month",
    features: [
      "Full Website SEO Optimization",
      "Social Media Management (5 platforms)",
      "Content Creation: 12 blog posts/month",
      "Email Marketing Campaigns",
      "Advanced Google Ads Management",
      "Weekly Performance Analysis",
    ],
    button: "Choose Plan",
    highlight: true,
    enterprise: false,
    badge: "Recommended",
  },
  {
    name: "Enterprise Plan",
    price: "Custom Quote",
    features: [
      "Tailored Marketing Strategy",
      "Unlimited SEO & Content Optimization",
      "Dedicated Account Manager",
      "Multi-Channel Social Media Management",
      "PPC and Conversion Optimization",
      "24/7 Customer Support",
      "Real-Time Analytics Dashboard",
    ],
    button: "Choose Plan",
    highlight: false,
    enterprise: true,
  },
];

export default function PricingPlans() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-18">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
              <span className="text-[#505050] text-base font-normal">Our Plan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-4 text-[#151515] w-6xl">Flexible Plans for Every Business</h2>
          </div>
          <p className="text-[#151515] text-base font-light max-w-xl mt-2 md:mt-8">
            Whether you're a startup or an established brand, we offer customizable packages that fit your needs and budget.
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[900px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-300 rounded-lg">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`flex flex-col h-full border-b lg:border-b-0 lg:border-r last:border-r-0 border-gray-300 p-6 bg-white ${
                  plan.highlight ? "bg-[#F3F7FB] relative" : ""
                } ${plan.enterprise ? "bg-[#F9E7C3]" : ""}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-semibold text-[#151515]">{plan.name}</span>
                  {plan.badge && (
                    <span className="ml-2 px-2 py-1 text-xs bg-[#E6EAFB] text-[#1A237E] rounded font-medium flex items-center gap-1">
                      <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="text-2xl font-bold text-[#151515] mb-4">{plan.price}</div>
                <div className="mb-2 font-medium text-[#151515]">What you'll get…</div>
                <ul className="mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 mb-2 text-[#151515]">
                      <span className="text-[#4F8EF7] text-lg">✓</span>
                      <span className="text-base font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-auto px-6 py-2 rounded border text-lg font-normal transition w-full
                    ${plan.highlight ? "bg-[#FFA800] text-black border-[#FFA800] hover:bg-[#ffb733]" : "bg-white text-[#1A237E] border-[#1A237E] hover:bg-[#F3F7FB]"}
                    ${plan.enterprise ? "bg-white text-[#1A237E] border-[#1A237E] hover:bg-[#F9E7C3]" : ""}
                  `}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-base text-[#151515]">
          Need more explanation?{' '}
          <Link href="#" className="font-semibold underline">Contact us</Link>
        </div>
      </div>
    </section>
  );
} 