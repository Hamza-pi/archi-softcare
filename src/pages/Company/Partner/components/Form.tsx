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
import img from "@/assets/image/calendar.svg";

const formSchema = z.object({
  email: z.string().min(1).email(),
  region: z.string().min(1),
  phone: z.string().min(10).max(14),
});

const PartnerForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      region: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full flex flex-col space-y-2 md:flex-row items-start justify-between xl:justify-evenly px-2 sm:px-4 md:px-6 lg:px-12 py-2 md:py-4 lg:py-8">
      <div className="text-zinc-800 space-y-2 flex flex-col items-center md:items-start justify-center md:justify-start">
        <h1 className="font-bold text-3xl">
          Get started,
          <br /> with no start up fee.
        </h1>
        <div className="flex items-center gap-0.5">
          <p>Looking for app or customer support?</p>
          <Button variant={"link"} size={"lg"} className="!p-0">
            Click here
          </Button>
        </div>
        <div className="">
          <img src={img} className="w-full h-full object-contain" alt="" />
        </div>
      </div>
      <div className="md:w-1/3 bg-zinc-800 p-4 rounded-lg space-y-2">
        <p className="text-sm text-center mx-auto">
          ‍Join the ArchiSoft Care movement and see for yourself why our
          software is the perfect fit for home care registries.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 px-2 sm:p-0"
          >
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
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State/Region *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button variant="primary" size={"lg"}>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PartnerForm;
