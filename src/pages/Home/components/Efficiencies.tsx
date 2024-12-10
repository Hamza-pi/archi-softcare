import VectorWord from "@/components/shared/VectorWord";
import { efficiencies } from "@/mock/home";

const Efficiencies = () => {
  return (
    <section className="px-12 space-y-4">
      <h1 className="text-primary text-4xl text-center drop-shadow-[1px_5px_10px_rgba(0,0,0,0.5)] font-bold">
        Why <VectorWord title="Ally?" />
      </h1>
      <p className="text-center text-zinc-800 font-medium">
        We help maintain compliance, in addition to all your billing and
        administrative needs.
      </p>
      <main className="bg-black/70 rounded-lg py-8">
        <div className="w-3/5 mx-auto space-y-4">
          <div className="w-full flex items-center justify-between text-secondary font-bold">
            <h3>Without Ally your registry may face:</h3>
            <div></div>
            <h3>With Ally you can:</h3>
          </div>
          {efficiencies.map((item) => (
            <div className="grid grid-cols-3 justify-items-center border text-center">
              <span>{item.issue}</span>
              <span>{item.domain}</span>
              <span>{item.solution}</span>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Efficiencies;
