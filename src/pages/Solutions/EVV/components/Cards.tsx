import IconCard from "@/components/shared/IconCard";
import icon1 from "@/assets/image/evvcard1.svg";
import icon2 from "@/assets/image/evvcard2.svg";
import icon3 from "@/assets/image/evvcard3.svg";
import icon4 from "@/assets/image/evvcard4.svg";
import icon5 from "@/assets/image/evvcard5.svg";
import icon6 from "@/assets/image/evvcard6.svg";
import icon7 from "@/assets/image/evvcard7.svg";
import icon8 from "@/assets/image/evvcard8.svg";

const cards = [
  {
    icon: icon1,
    description:
      "Empower your caregivers while verifying care and eliminating fraud",
  },
  {
    icon: icon2,
    description:
      "Empower your caregivers while verifying care and eliminating fraud",
  },
  {
    icon: icon3,
    description:
      "Empower your caregivers while verifying care and eliminating fraud",
  },
  {
    icon: icon4,
    description:
      "Empower your caregivers while verifying care and eliminating fraud",
  },
  {
    icon: icon5,
    description:
      "Empower your caregivers while verifying care and eliminating fraud",
  },
  {
    icon: icon6,
    description:
      "Empower your caregivers while verifying care and eliminating fraud",
  },
  {
    icon: icon7,
    description:
      "Empower your caregivers while verifying care and eliminating fraud",
  },
  {
    icon: icon8,
    description:
      "Empower your caregivers while verifying care and eliminating fraud",
  },
];

const Cards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-2 md:gap-4 px-2 sm:px-4 md:px-6 lg:px-12 max-w-screen-2xl mx-auto">
      {cards.map((card) => (
        <IconCard
          description={card.description}
          icon={card.icon}
          title=""
          showBtn={false}
        />
      ))}
    </section>
  );
};

export default Cards;
