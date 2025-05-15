import Link from "next/link";
import Image from "next/image";

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
    background: "#E8E8E8",
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
    background: "#EBF4FB",
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
    background: "#D9DDF6",
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
    background: "#FAD99B",
  },
];

export default function PricingPlans() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-18 pb-32 sm:pb-20">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
              <span className="text-[#505050] text-base font-normal">Our Plan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-4 text-[#151515] w-full md:w-3xl pr-0 md:pr-40 leading-10 md:leading-18 text-center md:text-left">Flexible Plans for Every Business</h2>
          </div>
          <p className="text-[#0E0E0E] text-lg font-light max-w-xl mt-2 md:mt-30 w-96 text-center md:text-left mx-auto md:mx-0">
            Whether you're a startup or an established brand, we offer customizable packages that fit your needs and budget.
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`flex flex-col h-full border border-gray-300 sm:border-r-0 last:border-r sm:last:border-r-0 lg:border-r-0 lg:last:border-r bg-white ${
                  plan.highlight ? "bg-[#F3F7FB] relative" : ""
                } ${plan.enterprise ? "bg-[#F9E7C3]" : ""} ${idx === plans.length - 1 ? 'mb-32 sm:mb-0' : ''} text-center md:text-left`}
              >
                <div className="flex-1 flex flex-col">
                  <div className={`flex flex-col sm:flex-row items-center sm:items-center gap-2 mb-2 bg-[${plan.background}] p-4 border-b border-gray-300 justify-center md:justify-start`}>
                    <span className="text-lg font-medium text-[#151515] w-fit text-center sm:w-auto sm:text-left">{plan.name}</span>
                    {plan.badge && (
                      <span className="ml-0 sm:ml-2 mt-2 sm:mt-0 px-2 py-1 text-xs bg-[#E6EAFB] text-[#1A237E] rounded-lg font-light flex items-center gap-1 w-fit sm:w-fit justify-center sm:justify-start sm:mx-0">
                        <Image src="/images/crown.svg" alt="Check Badge" width={16} height={16} className="inline" />
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-semibold text-[#151515] mb-6 text-center md:text-left">{plan.price}</div>
                    <div className="mb-2 font-medium text-[#151515] text-center md:text-left">What you'll get…</div>
                    <ul className="flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 mb-2 text-[#151515] justify-center md:justify-start text-center md:text-left">
                          <Image src="/images/Check-icon.svg" alt="Check" width={30} height={30} className="mt-1" />
                          <span className="text-md font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="m-0 sm:m-5 flex justify-center sm:justify-start">
                  <button
                    className={`mt-auto px-6 py-2 border text-lg font-normal transition w-full sm:w-fit text-center
                      ${plan.highlight ? "bg-[#F29F05] text-black border-[#FFA800] hover:bg-[#ffb733]" : "bg-white text-[#031CA6] border-[#031CA6] hover:bg-[#F3F7FB]"}
                      ${plan.enterprise ? "bg-white text-[#1A237E] border-[#1A237E] hover:bg-[#F9E7C3]" : ""}
                    `}
                  >
                    {plan.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-base text-[#000000] text-center md:text-left">
          Need more explanation?{' '}
          <Link href="#" className="font-semibold underline">Contact us</Link>
        </div>
      </div>
    </section>
  );
} 