import Navbar from "./components/Navbar";
import Upload from "./components/Upload";

export default function Home() {
  return (
    <div className="flex flex-col items-start w-screen h-screen gap-8 p-5">
      <Navbar />
      <Upload />
    </div>
  );
}
