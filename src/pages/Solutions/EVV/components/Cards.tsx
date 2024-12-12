import IconCard from "@/components/shared/IconCard";
import icon1 from "@/assets/image/evvcard1.svg";
import icon2 from "@/assets/image/evvcard2.svg";
import icon3 from "@/assets/image/EVV-1.svg";
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
    description: "Digital time and activity submission 24/7/365",
  },
  {
    icon: icon3,
    description:
      "Simple and easy-to-use interface even for the least tech savvy caregiver",
  },
  {
    icon: icon4,
    description: "Available to download on the iOS and Google Play stores",
  },
  {
    icon: icon5,
    description: "Real time exception tracking for unverified visits",
  },
  {
    icon: icon6,
    description:
      "Push notifications for the caregiver to constantly stay in the loop",
  },
  {
    icon: icon7,
    description: "Offline visit capture in case there is no internet",
  },
  {
    icon: icon8,
    description: "Open API to easily integrate with existing software systems",
  },
];

const Cards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 px-2 sm:px-4 md:px-6 lg:px-12 max-w-screen-2xl mx-auto">
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
