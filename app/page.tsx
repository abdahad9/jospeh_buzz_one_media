import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <main>
      <Header>
        <HeroBanner />
      </Header>
      {/* ...other sections */}
    </main>
  );
}
