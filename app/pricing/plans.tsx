import Image from "next/image";
import  { sanity } from "../../lib/sanity";

const features = [
  { label: "Ideal For", key: "ideal" },
  { label: "SEO Optimization", key: "seo" },
  { label: "Social Media Management", key: "social" },
  { label: "Content Marketing", key: "content" },
  { label: "Website Design Support", key: "design" },
  { label: "Email Marketing", key: "email" },
  { label: "Automation Tools", key: "automation" },
  { label: "Support", key: "support" },
];

interface Plan {
  name: string;
  ideal: boolean;
  seo: boolean;
  social: boolean;
  content: boolean;
  design: boolean;
  email: boolean;
  automation: boolean;
  support: boolean;
  button: string;
  highlight: boolean;
}

function renderCell(value: boolean | string) {
  if (value === null) {
    return <Image src="/images/icons/check.svg" alt="cross" className="inline-block " width={24} height={24} />;
  }
  if (value === true) {
    return <span className="inline-block text-2xl text-green-500">✓</span>;
  }
  return <span>{value}</span>;
}

export default async function Plans() {

    const plans = await sanity.fetch(`*[_type == "pricingPlan"]{
        name,
        ideal,
        seo,
        social,
        content,
        design,
        email,
        automation,
        support,
        button,
        highlight
      }`);

    // Sort plans: Starter, Growth, Premium
    const sortedPlans = plans.sort((a: Plan, b: Plan) => {
      const order = { 'Starter Plan': 1, 'Growth Plan': 2, 'Premium Plan': 3 };
      const aOrder = order[a.name as keyof typeof order] || 999;
      const bOrder = order[b.name as keyof typeof order] || 999;
      return aOrder - bOrder;
    });

  return (
    <section className="max-w-full mx-auto py-16 px-2 md:px-18 text-center md:text-left">
      <h2 className="text-4xl md:text-6xl font-normal mb-4 text-[#181818] md:pr-180 md:leading-18">Ready to take your brand to the next level?</h2>
      <p className="text-[#505050] font-light text-lg mb-12 max-w-2xl">Choose the plan that fits your business needs and let BuzzOne Media transform your digital presence!</p>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border-spacing-y-0 text-center">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-2xl font-medium py-4 px-4 bg-white text-black">Creation</th>
              {sortedPlans.map((plan: Plan) => (
                <th
                  key={plan.name}
                  className={`text-2xl font-medium py-4 px-6 text-black ${plan.highlight ? "bg-[#F1F3FF]" : "bg-white"}`}
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature.key} className="border-t  text-black border-b border-gray-200">
                <td className="text-left py-8 px-6 font-medium text-[#181818] bg-white ">{feature.label}</td>
                {sortedPlans.map((plan: Plan) => (
                  <td
                    key={plan.name + feature.key}
                    className={`py-4 px-6 font-light text-[#505050] ${plan.highlight ? "bg-[#F1F3FF]" : "bg-white"}`}
                  >
                    {renderCell(plan[feature.key as keyof Plan])}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t border-gray-200 text-black">
              <td className="bg-white text-black"></td>
              {sortedPlans.map((plan: Plan) => (
                <td
                  key={plan.name + "btn"}
                  className={`py-6 px-6 text-black ${plan.highlight ? "bg-[#F1F3FF]" : "bg-white"}`}
                >
                  <button
                    className={`w-fit px-8 py-3 font-medium text-lg transition-all border ${plan.highlight ? "bg-[#F4A72A] text-black border-[#F4A72A] hover:bg-[#e89c1e]" : "bg-white text-[#031CA6] border-[#031CA6] hover:bg-[#F4F7FB]"}`}
                  >
                    {plan.button}
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
} 