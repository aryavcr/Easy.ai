import Navbar from "@/components/global/Navbar";
import Wip from "@/components/global/Wip";

export default function Home() {
  return (
      <main>
        <Navbar />
        <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"><Wip /></div>
        </section>
      </main>
  );
}
