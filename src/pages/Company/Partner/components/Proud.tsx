import VectorWord from "@/components/shared/VectorWord";
import { Card, CardContent } from "@/components/ui/card";
import p1 from "@/assets/image/sandata.webp";
import p2 from "@/assets/image/polsinelli-1.svg";
import p3 from "@/assets/image/availity.webp";
import p4 from "@/assets/image/CAREBRIDGE.webp";
import p5 from "@/assets/image/tfg-insurance.webp";
import p6 from "@/assets/image/Authenticare.webp";
import p7 from "@/assets/image/screeningone.webp";
import p8 from "@/assets/image/Stripe.webp";
import p9 from "@/assets/image/hhaexchange.webp";
import p10 from "@/assets/image/tellus EVV logo.webp";
import p11 from "@/assets/image/Quickbooks.webp";
import p12 from "@/assets/image/Office-Ally.webp";
import p13 from "@/assets/image/CareAcademy.webp";

const Proud = () => {
  return (
    <section className="max-w-screen-2xl bg-zinc-800 mx-auto px-2 sm:px-4 md:px-20 py-2 sm:py-4 md:py-8 space-y-4 md:space-y-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-center lg:[word-spacing:-1px] text-primary">
        <VectorWord title={"ArchiSoft Care"} /> is proud to offer a full suite
        of connected services to ensure you are fully connected to services that
        matter most.
      </h1>
      <main className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13].map(
          (item) => (
            <Card key={item}>
              <CardContent>
                <div className="flex h-24 sm:h-36 md:h-40 items-center justify-center pt-3">
                  <img
                    className="w-full h-full object-contain"
                    src={item}
                    alt=""
                  />
                </div>
              </CardContent>
            </Card>
          )
        )}
      </main>
    </section>
  );
};

export default Proud;
