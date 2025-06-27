import Link from "next/link";
import Image from "next/image";
import { sanity } from "../../lib/sanity";

interface Plan {
  name: string;
  price: string;
  features: string[];
  button: string;
  highlight: boolean;
  enterprise: boolean;
  badge: string;
  background: string;
}

export default async function PricingPlans({ title = "Flexible Plans for Every Business" }: { title?: string }) {

  const plans = await sanity.fetch(`
    *[_type == "businessPlans"]{
      name,
      price,
      features,
      button,
      highlight,
      enterprise,
      badge,
      background
    }
  `);

  // Sort plans: Starter, Growth, Premium
  const sortedPlans = plans.sort((a: Plan, b: Plan) => {
    const order = { 'Starter Plan': 1, 'Growth Plan': 2, 'Premium Plan': 3 };
    const aOrder = order[a.name as keyof typeof order] || 999;
    const bOrder = order[b.name as keyof typeof order] || 999;
    return aOrder - bOrder;
  });

  console.log('plans', sortedPlans);
  
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 sm:mb-10 md:mb-12 lg:mb-16 gap-6 sm:gap-8">
          <div>
            {title === "Flexible Plans for Every Business" && (
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
                <span className="text-[#505050] text-base font-normal">Our Plan</span>
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-4 text-[#151515] w-full md:w-auto lg:w-3xl pr-0 md:pr-8 lg:pr-20 xl:pr-40 leading-tight md:leading-10 lg:leading-18 text-center md:text-left">{title}</h2>
          </div>
          {title === "Flexible Plans for Every Business" && (
            <p className="text-sm sm:text-base md:text-lg text-[#0E0E0E] font-light max-w-lg md:max-w-xl lg:max-w-2xl mt-2 md:mt-8 lg:mt-30 text-center md:text-left mx-auto md:mx-0">
              Whether you&apos;re a startup or an established brand, we offer customizable packages that fit your needs and budget.
            </p>
          )}
        </div>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0">
            {sortedPlans.map((plan : Plan) => (
              <div
                key={plan.name}
                className={`flex flex-col h-full border border-gray-300 sm:border-r-0 last:border-r sm:last:border-r-0 lg:border-r-0 lg:last:border-r-1 bg-white ${
                  plan.highlight ? "bg-[#F3F7FB] relative" : ""
                } ${plan.enterprise ? "bg-[#F9E7C3]" : ""} text-center md:text-left`}
              >
                <div className="flex-1 flex flex-col">
                  <div className={`flex flex-col sm:flex-row items-center sm:items-center gap-2 mb-2 bg-[${plan.background}] p-3 sm:p-4 border-b border-gray-300 justify-center md:justify-start`}>
                    <span className="text-base sm:text-lg font-medium text-[#151515] w-fit text-center sm:w-auto sm:text-left">{plan.name}</span>
                    {plan.badge && (
                      <span className="ml-0 sm:ml-2 mt-2 sm:mt-0 px-2 py-1 text-xs bg-[#E6EAFB] text-[#1A237E] rounded-lg font-light flex items-center gap-1 w-fit sm:w-fit justify-center sm:justify-start sm:mx-0">
                        <Image src="/images/crown.svg" alt="Check Badge" width={16} height={16} className="inline" />
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-3 sm:p-4 md:p-6">
                    <div className="text-base sm:text-lg font-semibold text-[#151515] mb-4 sm:mb-6 text-center md:text-left">{plan.price}</div>
                    <div className="mb-2 font-medium text-[#151515] text-center md:text-left">What you&apos;ll get…</div>
                    <ul className="flex-1">
                      {plan.features.map((feature : string) => (
                        <li key={feature} className="flex items-center gap-2 mb-2 text-[#151515] justify-center md:justify-start text-center md:text-left">
                          <Image src="/images/Check-icon.svg" alt="Check" width={24} height={24} className="mt-1 w-6 h-6 sm:w-8 sm:h-8" />
                          <span className="text-sm sm:text-md font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="m-3 sm:m-4 md:m-5 flex justify-center sm:justify-start">
                  <Link
                    href="/contact"
                    className={`mt-auto px-4 sm:px-6 py-2 border text-base sm:text-lg font-normal transition w-full sm:w-fit text-center
                      ${plan.highlight ? "bg-[#F29F05] text-black border-[#FFA800] hover:bg-[#ffb733]" : "bg-white text-[#031CA6] border-[#031CA6] hover:bg-[#F3F7FB]"}
                      ${plan.enterprise ? "bg-white text-[#1A237E] border-[#1A237E] hover:bg-[#F9E7C3]" : ""}
                    `}
                  >
                    {plan.button}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 sm:mt-8 text-sm sm:text-base text-[#000000] text-center md:text-left">
          Need more explanation?{' '}
          <Link href="/contact" className="font-semibold underline">Contact us</Link>
        </div>
      </div>
    </section>
  );
} 