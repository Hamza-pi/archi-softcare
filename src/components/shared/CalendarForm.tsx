import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { z } from "zod";
import { MapPin } from "lucide-react";
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
import submitted from "@/assets/image/submitted.svg";

const formSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().min(1).email(),
  companyName: z.string().min(1),
  phone: z.string().min(10).max(14),
});

const CalendarForm = ({ selectedDate }: { selectedDate: Date }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      phone: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader className="px-0">
        {form.formState.isSubmitSuccessful ? (
          <>
            <DrawerTitle>
              <div className="w-full h-44">
                <img className="w-full h-full" src={submitted} alt="" />
              </div>
            </DrawerTitle>
            <DrawerDescription className="text-center text-lg space-y-4">
              <h3 className="text-xl">Booking Confirmed</h3>
              <p className="text-sm w-3/4 mx-auto">
                You're booked with Ty Thompson. An invitation has been emailed
                to you.
              </p>
              <p className="font-bold">December 11, 2024 7:15 PM</p>
            </DrawerDescription>
          </>
        ) : (
          <>
            <DrawerTitle>Your information</DrawerTitle>
            <DrawerDescription className="font-bold">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                <p>{selectedDate.toDateString()}</p>
                <DrawerClose asChild>
                  <Button
                    variant="link"
                    size={"icon"}
                    className="font-bold text-secondary"
                  >
                    Edit
                  </Button>
                </DrawerClose>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin size={14} />
                <span>Microsoft Teams</span>
              </div>
            </DrawerDescription>
          </>
        )}
      </DrawerHeader>
      {!form.formState.isSubmitSuccessful && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 px-2 sm:p-0"
          >
            <div className="flex items-center justify-between gap-2">
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
            </div>
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
            <DrawerFooter className="flex-row justify-between">
              <DrawerClose asChild>
                <Button variant="outline" size={"lg"}>
                  Cancel
                </Button>
              </DrawerClose>
              <Button size={"lg"}>Submit</Button>
            </DrawerFooter>
          </form>
        </Form>
      )}
    </div>
  );
};

export default CalendarForm;
