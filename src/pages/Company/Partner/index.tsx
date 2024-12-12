import Banner from "@/components/shared/Banner";
import bannerImg from "@/assets/image/PartnerBanner.webp";

const Partner = () => {
  return (
    <main className="space-y-6 md:space-y-12">
      <Banner
        imgUrl={bannerImg}
        heading="Partners & Integrations"
        paragraph="Ally is proud to collaborate with a network of trusted partners to give your home care registry business a competitive edge. Our integrations provide seamless access to essential services, from compliant background checks and occupational accident insurance to innovative tools that help you manage your registry more efficiently. With Ally, you can leverage industry-leading solutions tailored specifically for your needs."
        btnVariant="secondary"
        imgStyle="!max-w-96"
        className="text-slate-200"
      />
    </main>
  );
};

export default Partner;
