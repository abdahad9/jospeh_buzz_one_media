export default function CallToActionBanner() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-18 bg-white">
      <div className="rounded-2xl bg-gradient-to-br from-[#2A3B8F] to-[#031CA6] text-white flex flex-col items-center justify-center py-22 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium mb-4 text-center">Ready to Elevate Your Brand?</h2>
        <p className="text-base sm:text-lg font-light mb-8 text-center max-w-1xl">Let's work together to build something extraordinary. Contact us today to get started.</p>
        <button className="bg-white text-[#151515] px-8 py-3 font-normal text-lg hover:bg-gray-100 transition">See More</button>
      </div>
    </section>
  );
} 