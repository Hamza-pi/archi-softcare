import VectorWord from "@/components/shared/VectorWord";
import mobileImg from "@/assets/image/evv3.webp";
import leftImg from "@/assets/image/Mobile-App_Left.svg";
import rightImg from "@/assets/image/Mobile-App_Right.svg";

const leftItems: string[] = [
  "Verify GPS location at the time of care",
  "Simple, easy to use digital time card",
  "Electronic Signature insurance claims",
  "Digital submission of care data",
];

const rightItems: string[] = [
  "No pin codes to remember",
  "Know if the caregiver is in the client's home",
  "Track ADLs, time and progress of the client",
  "State and LTC insurance career approved",
];

const MobileApp = () => {
  return (
    <section className="px-2 sm:px-6 md:px-12 py-2 sm:py-6 md:py-12 bg-primary space-y-4">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-[0px_0px_10px_rgba(0,0,0,0.5)]">
          <VectorWord title="Eliminate" /> paper timesheets and the fraud,
          leakage and abuse associated with them.
        </h1>
        <p className="text-center mx-auto w-9/12">
          ArchiSoft Care's Caregiver Mobile App is a simple and easy to use
          interface even for the least tech savvy caregiver.
        </p>
        <main className="p-2 flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Left */}
          <ul className="w-full md:w-1/3 space-y-4 md:space-y-8">
            {leftItems.map((item) => (
              <li className="flex items-center justify-between md:justify-end gap-4">
                <h3 className="text-right md:text-xl md:w-2/3">{item}</h3>
                <div className="w-16 h-16">
                  <img
                    className="w-full h-full object-contain"
                    src={leftImg}
                    alt={item}
                  />
                </div>
              </li>
            ))}
          </ul>
          {/* App Image */}
          <div className="w-1/4 hidden md:inline-flex">
            <img className="w-full h-full" src={mobileImg} alt="" />
          </div>
          {/* Right */}
          <ul className="w-full md:w-1/3 space-y-4 md:space-y-8">
            {rightItems.map((item) => (
              <li className="flex flex-row-reverse md:flex-row items-center justify-between md:justify-start gap-4">
                <div className="w-16 h-16">
                  <img
                    className="w-full h-full object-contain rotate-180 md:rotate-0"
                    src={rightImg}
                    alt={item}
                  />
                </div>
                <h3 className="text-left md:text-xl md:w-2/3">{item}</h3>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </section>
  );
};

export default MobileApp;
