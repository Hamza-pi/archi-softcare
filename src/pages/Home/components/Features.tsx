import VectorWord from "@/components/shared/VectorWord";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tabs } from "@/mock/home";
import List from "@/components/shared/List";

const Features = () => {
  return (
    <section className="px-2 lg:px-12 py-6 space-y-4">
      <h1 className="text-4xl text-tertiary font-bold text-center">
        <VectorWord title="Features" />
      </h1>
      <p className="text-center text-lg text-primary font-medium ">
        Powerful features to help you run your home care registry.
      </p>
      <main className="p-2 md:p-4 rounded-t-3xl">
        <Tabs defaultValue={tabs[0].value}>
          <TabsList className="w-full hidden md:flex grids grid-cols-5 justify-evenly">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.footerTitle}
                value={tab.value}
                className="flex items-center gap-2 w-full font-bold"
              >
                <tab.icon />
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsList className="w-full flex lg:hidden  items-center justify-center">
            <Select>
              <SelectTrigger className="mx-auto">
                <SelectValue placeholder={tabs[0].value} />
              </SelectTrigger>
              <SelectContent>
                {tabs.map((tab) => (
                  <SelectItem key={tab.value} value={tab.value}>
                    <TabsTrigger
                      key={tab.footerTitle}
                      value={tab.value}
                      className="flex items-center gap-2 w-full font-bold data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                    >
                      <tab.icon />
                      {tab.title}
                    </TabsTrigger>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <motion.div
                initial={{ translateX: 100, scale: 0.25, opacity: 0.2 }}
                whileInView={{ translateX: 0, scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  ease: "ease-in-out",
                  duration: 2,
                }}
              >
                <Card className="text-zinc-800 border-none">
                  <CardHeader>
                    <CardTitle className="font-bold text-2xl">
                      {tab.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm flex items-start justify-between">
                    <div className="space-y-4">
                      <List items={tab.items} />
                      <Button variant={"primary"} size={"lg"}>
                        {tab.footerTitle}&nbsp;&rarr;
                      </Button>
                    </div>
                    <div className="w-96 hidden md:inline-flex">
                      <img
                        src={tab.imgUrl}
                        className="w-full h-full object-cover"
                        alt={tab.title}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </section>
  );
};

export default Features;
