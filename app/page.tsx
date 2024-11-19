import Navbar from "./components/Navbar";
import Analyze from "./components/Analyze";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-start w-screen h-screen gap-8 px-5 md:p-5">
      <Navbar />
      <Analyze />
      <Footer />
    </div>
  );
}
