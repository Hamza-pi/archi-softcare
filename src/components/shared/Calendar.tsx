import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import calendarImg from "@/assets/image/calendar.svg";
import logo from "@/assets/image/logo.png";
import { useState } from "react";
import { formateDate, getCurrentWeekRange } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import CalendarForm from "./CalendarForm";

const CalendarSection = () => {
  const glassCardStyle =
    "backdrop-blur-sm p-3 border border-tertiary rounded-2xl shadow-2xl ";
  const { startOfWeek, endOfWeek } = getCurrentWeekRange();
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <section className="px-2 sm:px-6 xl:px-12 max-w-screen-2xl mx-auto py-3 md:py-6 space-y-8 bg-gradient-to-b from-primary via-[#79a355]/60 to-white rounded-t-3xl sm:rounded-t-[54px]">
      <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center">
        Get started, with no start up fee.
      </h1>
      <main className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  justify-items-stretch gap-2">
        {/* Description */}
        <div
          className={`${glassCardStyle} bg-white/20  space-y-2 text-zinc-800 hidden sm:block`}
        >
          <h3 className="font-semibold text-lg">
            Join the Ally movement and see for yourself why our software is the
            perfect fit for home care registries.
          </h3>
          <span className="flex items-center justify-between text-sm">
            <span>Looking for app or customer support?</span>
            <Button variant={"link"} size={"lg"}>
              Click here.
            </Button>
          </span>
          <div className="w-full">
            <img
              src={calendarImg}
              className="w-full h-full object-cover"
              alt={"On borading Calendar Image"}
            />
          </div>
        </div>
        {/* Calendar */}
        <div
          className={`${glassCardStyle} bg-zinc-800/60 ${
            date ? "hidden" : "block"
          } xl:block`}
        >
          <img className="w-28 mx-auto" src={logo} alt="Logo" />
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="w-fit mx-auto h-full"
            disabled={{
              before: startOfWeek,
              after: endOfWeek,
              dayOfWeek: [0],
            }}
            fromDate={startOfWeek}
            toDate={endOfWeek}
          />
        </div>
        {/* Meeting Times */}
        <div
          className={`${glassCardStyle} bg-[#deb742]/20 p-6 text-zinc-800 space-y-8 ${
            date ? "block" : "hidden"
          } xl:block`}
        >
          <div className="w-full space-y-2">
            <h3 className="text-sm font-semibold">Meeting Duration</h3>
            <div className="p-1 bg-tertiary w-full border border-slate-300 rounded text-center text-xs text-slate-200 font-bold">
              30mins{" "}
            </div>
          </div>
          <div className="w-full h-full space-y-2 text-sm font-semibold">
            <h3>What time works best?</h3>
            <p className="font-normal">
              Showing times for{" "}
              <span className="font-semibold">{date && formateDate(date)}</span>
            </p>
            {/* Times List */}
            <div className="space-y-2">
              <Select>
                <SelectTrigger className="w-full text-xs text-slate-200">
                  <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">
                      Eastern Standard Time (EST)
                    </SelectItem>
                    <SelectItem value="cst">
                      Central Standard Time (CST)
                    </SelectItem>
                    <SelectItem value="mst">
                      Mountain Standard Time (MST)
                    </SelectItem>
                    <SelectItem value="pst">
                      Pacific Standard Time (PST)
                    </SelectItem>
                    <SelectItem value="akst">
                      Alaska Standard Time (AKST)
                    </SelectItem>
                    <SelectItem value="hst">
                      Hawaii Standard Time (HST)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Europe & Africa</SelectLabel>
                    <SelectItem value="gmt">
                      Greenwich Mean Time (GMT)
                    </SelectItem>
                    <SelectItem value="cet">
                      Central European Time (CET)
                    </SelectItem>
                    <SelectItem value="eet">
                      Eastern European Time (EET)
                    </SelectItem>
                    <SelectItem value="west">
                      Western European Summer Time (WEST)
                    </SelectItem>
                    <SelectItem value="cat">
                      Central Africa Time (CAT)
                    </SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                    <SelectItem value="ist">
                      India Standard Time (IST)
                    </SelectItem>
                    <SelectItem value="cst_china">
                      China Standard Time (CST)
                    </SelectItem>
                    <SelectItem value="jst">
                      Japan Standard Time (JST)
                    </SelectItem>
                    <SelectItem value="kst">
                      Korea Standard Time (KST)
                    </SelectItem>
                    <SelectItem value="ist_indonesia">
                      Indonesia Central Standard Time (WITA)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Australia & Pacific</SelectLabel>
                    <SelectItem value="awst">
                      Australian Western Standard Time (AWST)
                    </SelectItem>
                    <SelectItem value="acst">
                      Australian Central Standard Time (ACST)
                    </SelectItem>
                    <SelectItem value="aest">
                      Australian Eastern Standard Time (AEST)
                    </SelectItem>
                    <SelectItem value="nzst">
                      New Zealand Standard Time (NZST)
                    </SelectItem>
                    <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>South America</SelectLabel>
                    <SelectItem value="art">Argentina Time (ART)</SelectItem>
                    <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                    <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                    <SelectItem value="clt">
                      Chile Standard Time (CLT)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <ul className="max-h-64 overflow-hidden overflow-y-scroll space-y-1">
                <Drawer>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                    <li key={item}>
                      <DrawerTrigger asChild>
                        <Button
                          className="min-w-full"
                          variant={"primary"}
                          size={"lg"}
                        >
                          12:15 am
                        </Button>
                      </DrawerTrigger>
                    </li>
                  ))}
                  <DrawerContent className="bg-zinc-800 border-none">
                    <CalendarForm selectedDate={date || new Date()} />
                  </DrawerContent>
                </Drawer>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CalendarSection;
