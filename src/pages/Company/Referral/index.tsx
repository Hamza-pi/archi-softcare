import VectorWord from "@/components/shared/VectorWord";
import img from "@/assets/image/Referral-Program-2.webp";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().min(1).email(),
  companyName: z.string().min(1),
  phone: z.string().min(10),
  referal: z.string().min(1),
});

const Referal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      phone: "",
      referal: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-20 py-2 sm:py-4 md:py-8 space-y-4 md:space-y-8">
      <h1 className="text-3xl lg:text-4xl font-extrabold text-center lg:[word-spacing:-1px] text-primary mt-20">
        Give the Gift of ArchiSoft Care and Earn <VectorWord title="Rewards!" />
      </h1>
      <main className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-y-4 py-2">
        {/* Left Content */}
        <div className="text-zinc-800 space-y-4 w-full md:w-1/2 px-4 xl:px-8">
          <h1 className="text-3xl font-bold">
            Know anyone looking to expand their registry?
          </h1>
          <p className="text-sm">
            We'd love to be a resource and partner with them. Refer them, and
            we'll share a $100 gift card* with both of you as a thank you. Your
            friends will gain far more than the reward.
          </p>
          <h4 className="text-sm font-bold">
            They'll gain a trusted partner who understands their business and
            compliance needs, and will help them expand their registry.{" "}
          </h4>
          <div
            className="w-full flex items-start justify-start
          "
          >
            <img className="w-full h-full object-contain" src={img} alt="" />
          </div>
          <h2 className="font-bold text-3xl">How it works:</h2>
          <ul className="pl-5 text-sm space-y-3 list-disc marker:text-secondary">
            <li>
              You submit the information below for both you and the home care
              registry you would like to refer.{" "}
            </li>
            <li>
              They'll receive an email or phone call letting them know you've
              referred them to Ally. You can let them know to look out for a
              communication from us.{" "}
            </li>
            <li>
              If they become an Ally customer, we'll share a gift card reward
              with you as a courtesy for sharing the word about Ally to others.{" "}
            </li>
            <li>
              Your referred friend will receive a gift card reward as well, to
              share our appreciation for choosing us as a partner.{" "}
            </li>
          </ul>
        </div>
        {/* Right Form */}
        <div className="w-full md:w-1/2 self-start bg-primary p-2 xl:p-4 rounded-lg space-y-2">
          <h1 className="text-lg font-semibold">
            Existing Customer Information
          </h1>
          <p className="text-sm">*Only applicable for existing Ally clients</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 px-2 sm:p-0"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your email address *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company name *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="referal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Who are you referring? Please include Full name, Business
                      Name, Phone Number and Email.*
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button variant={"secondary"} size={"lg"}>
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <div className="bg-zinc-800 p-4 rounded-lg space-y-2">
        <h1 className="text-2xl text-slate-200/40 font-extrabold">
          Why Ally? Ally Helps Home Care Registries!
        </h1>
        <h4 className="text-sm font-bold">
          All-in-one software platform that includes scheduling, payment
          processing, caregiver payments and claims submission.
        </h4>
        <ul className="text-sm list-disc marker:text-secondary space-y-2 px-4">
          <li>
            <span className="font-bold">Grow Faster</span> - Ally automates
            payment processing allowing you to focus on sales and marketing
          </li>
          <li>
            <span className="font-bold">
              Reduce the Risk of DOL Non-Compliance{" "}
            </span>
            - Our compliant payment processing reduces the risk of being labeled
            the employer by the DOL.
          </li>
          <li>
            <span className="font-bold">Free Software</span> - Stop paying
            license fees for your scheduling software. We NEVER charge license
            fees. Our software is free to home care registries.
          </li>
          <li>
            <span className="font-bold">Electronic Visit Verification</span> -
            Eliminate paper timesheets by using our state of the art electronic
            visit system. We have both telephony and a native mobile app to make
            clocking in and out seamless for your caregivers.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Referal;
