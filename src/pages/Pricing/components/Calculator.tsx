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
  adminWage: z.coerce.number().min(1),
  payrollHours: z.coerce.number().min(1),
  billingHours: z.coerce.number().min(0),
  collectionHours: z.coerce.number().min(0),
  ltciHours: z.coerce.number().min(0),
  callHours: z.coerce.number().min(0),
  email: z.string().min(1).email(),
});

const Calculator = () => {
  const formItemStyle = "grid sm:grid-cols-12 gap-2 items-center";
  const formLabelStyle =
    "col-span-6 md:col-span-5 text-sm md:text-base font-semibold";
  const formInputStyle = "col-span-6 md:col-span-7";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adminWage: 0,
      payrollHours: 0,
      billingHours: 0,
      collectionHours: 0,
      ltciHours: 0,
      callHours: 0,
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-12 py-2 sm:py-4 md:py-8 space-y-4 md:space-y-8">
      <main className="bg-primary grid sm:grid-cols-4 rounded-xl  p-2 sm:p-6 max-w-screen-2xl mx-auto">
        <div className="col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="adminWage"
                render={({ field }) => (
                  <FormItem className={formItemStyle}>
                    <FormLabel className={formLabelStyle}>
                      Average Admin Hourly Wage*
                    </FormLabel>
                    <FormControl className={formInputStyle}>
                      <Input
                        type="number"
                        min="0"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="payrollHours"
                render={({ field }) => (
                  <FormItem className={formItemStyle}>
                    <FormLabel className={formLabelStyle}>
                      Average # Of Pay Roll Hours*
                    </FormLabel>
                    <FormControl className={formInputStyle}>
                      <Input
                        type="number"
                        min="0"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="billingHours"
                render={({ field }) => (
                  <FormItem className={formItemStyle}>
                    <FormLabel className={formLabelStyle}>
                      Average # of Billing Hours
                    </FormLabel>
                    <FormControl className={formInputStyle}>
                      <Input
                        type="number"
                        min="0"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="collectionHours"
                render={({ field }) => (
                  <FormItem className={formItemStyle}>
                    <FormLabel className={formLabelStyle}>
                      Average # of Collections Hours
                    </FormLabel>
                    <FormControl className={formInputStyle}>
                      <Input
                        type="number"
                        min="0"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ltciHours"
                render={({ field }) => (
                  <FormItem className={formItemStyle}>
                    <FormLabel className={formLabelStyle}>
                      Average # of LTCI Claims Hours
                    </FormLabel>
                    <FormControl className={formInputStyle}>
                      <Input
                        type="number"
                        min="0"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="callHours"
                render={({ field }) => (
                  <FormItem className={formItemStyle}>
                    <FormLabel className={formLabelStyle}>
                      Average # of Client/CG Call Hours
                    </FormLabel>
                    <FormControl className={formInputStyle}>
                      <Input
                        type="number"
                        min="0"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className={formItemStyle}>
                    <FormLabel className={formLabelStyle}>Email*</FormLabel>
                    <FormControl className={formInputStyle}>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button variant={"secondary"} size={"sm"}>
                Calculate your ROI with ArchiSoft Care
              </Button>
            </form>
          </Form>
        </div>
        <div className="hidden md:block"></div>
        <div className="col-span-2 md:col-span-1 flex flex-col gap-8 items-start sm:items-center md:items-start justify-start">
          <div className="text-left sm:text-center col-span-1 space-y-3">
            <h2 className="text-xl font-bold">Potential Labor Savings</h2>
            <p className="text-5xl font-bold text-secondary">$XXX,XXX</p>
          </div>
          <div className="text-left sm:text-center col-span-1 space-y-3">
            <h2 className="text-xl ">Total Weekly Hours Saved</h2>
            <p className="text-5xl font-bold text-secondary">XXX</p>
          </div>
          <div className="text-left sm:text-center col-span-1 space-y-3">
            <h2 className="text-xl ">Total Monthly Hours Saved</h2>
            <p className="text-5xl font-bold text-secondary">XXX</p>
          </div>
          <Button
            type="button"
            className="text-secondary"
            variant={"link"}
            size={"lg"}
          >
            Clear calculator fields
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Calculator;
