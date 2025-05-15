import Navbar from "./Navbar";
import ClientLogos from "./ClientLogos";

export default function Header({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header
      className="relative min-h-[80vh] flex flex-col justify-between"
      style={{ 
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Navbar />
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 pt-16 pb-6 flex flex-col md:flex-row items-center justify-between flex-1">
        {children}
      </div>
      <ClientLogos />
    </header>
  );
} 