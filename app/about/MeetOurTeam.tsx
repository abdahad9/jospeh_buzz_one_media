import Image from "next/image";

export default function MeetOurTeam() {
  return (
    <section className="w-full bg-[#181818] py-16 px-4 sm:px-8 md:px-16 lg:px-18">
      <div className="max-w-full mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Heading and Description */}
        <div className="md:w-1/2 w-full flex flex-col justify-between mb-8 md:mb-0">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-normal text-white mb-6">Meet Our Team</h2>
            <p className="text-base md:text-lg text-[#E0E0E0] max-w-1xl mx-auto md:mx-0">
              Each person on our team plays a vital role in delivering the high-quality handyman services our customers rely on. Get to know the professionals who make it all happen.
            </p>
          </div>
          {/* CTA Card */}
          <div className="mt-16 bg-[#232323] rounded-2xl p-6 md:p-8 max-w-xl mb-14 mx-auto md:mx-0 text-center md:text-left">
            <p className="text-white mb-4">
              Are you a driven professional ready to join a dynamic team and reshape the future of digital marketing agency?
            </p>
            <a href="#" className="inline-flex items-center text-[#FFA800] font-medium hover:underline transition">
              Open Roles
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
        {/* Right: Team Grid */}
        <div className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image src="/images/terry.png" alt="Terry Dokidis" width={260} height={260} className="rounded-xl object-cover w-full h-auto mb-4" />
            <span className="text-white text-lg font-medium">Terry Dokidis</span>
            <span className="text-[#B0B0B0] text-sm">Founder & Lead</span>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image src="/images/tatiana.png" alt="Tatiana Schleifer" width={260} height={260} className="rounded-xl object-cover w-full h-auto mb-4" />
            <span className="text-white text-lg font-medium">Tatiana Schleifer</span>
            <span className="text-[#B0B0B0] text-sm">Chief Marketing Officer</span>
          </div>
          {/* Team Member 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image src="/images/alfredo.png" alt="Alfredo Schleifer" width={260} height={260} className="rounded-xl object-cover w-full h-auto mb-4" />
            <span className="text-white text-lg font-medium">Alfredo Schleifer</span>
            <span className="text-[#B0B0B0] text-sm">Head of Corporate Law</span>
          </div>
          {/* Team Member 4 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image src="/images/abram.png" alt="Abram Baptista" width={260} height={260} className="rounded-xl object-cover w-full h-auto mb-4" />
            <span className="text-white text-lg font-medium">Abram Baptista</span>
            <span className="text-[#B0B0B0] text-sm">Contracts and Agreements Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
} 