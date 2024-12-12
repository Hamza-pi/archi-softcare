import CalendarSection from "@/components/shared/Calendar";

const Schedule = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-12 py-2 sm:py-4 md:py-8 space-y-4 md:space-y-8">
      <div className="text-center text-4xl text-primary mt-20 space-y-4">
        <h1 className="font-bold">
          Spend more time growing your registry while maintaining compliance.
        </h1>
      </div>
      <CalendarSection />
    </section>
  );
};

export default Schedule;
