export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 py-6 sm:py-8">
    {[
      {
        value: '1,200',
        suffix: '+',
        title: 'Projects Completed',
        desc: 'Successfully delivering exceptional results across various industries worldwide.'
      },
      {
        value: '800',
        suffix: '+',
        title: 'Satisfied Clients',
        desc: 'Building long-term partnerships through trust, quality, and impactful outcomes.'
      },
      {
        value: '10',
        suffix: '+',
        title: 'Years of Experience',
        desc: 'Proven expertise in driving digital transformation and business growth.'
      },
      {
        value: '95',
        suffix: '%',
        title: 'Client Retention Rate',
        desc: 'Our commitment to excellence ensures clients keep coming back for more.'
      }
    ].map((stat) => (
      <div key={stat.title} className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-black mb-2">
          {stat.value}
          <span className="text-[#041DA6] font-bold">{stat.suffix}</span>
        </span>
        <span className="text-sm sm:text-base md:text-lg font-normal text-[#505050] mb-3 sm:mb-4 mt-2">{stat.title}</span>
        <div className="w-full lg:w-full border-t border-gray-300 mb-3 sm:mb-4 font-light" />
        <span className="text-[#505050] font-light text-xs sm:text-sm md:text-base">{stat.desc}</span>
      </div>
    ))}
  </div>
  );
} 