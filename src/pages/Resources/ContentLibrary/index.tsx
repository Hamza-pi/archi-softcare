import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import { contentCards } from "@/mock/contentlibrary";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ContentLibrary: React.FC = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-12 py-2 sm:py-4 md:py-8 space-y-4 md:space-y-8">
      <div className="text-center text-4xl text-primary mt-20 space-y-4">
        <h1 className="font-bold">Content Library</h1>
        <p className="text-2xl font-semibold text-zinc-800 w-9/12 mx-auto">
          Access our collection of resources designed with your business growth
          and compliance needs in mind.
        </p>
      </div>
      <main className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
        {contentCards.map((card) => (
          <Card key={card.title} className="bg-zinc-800">
            <CardHeader>
              <CardTitle className="w-full">
                <img
                  className="w-full h-full object-contain rounded-lg"
                  src={card.imgUrl}
                  alt=""
                />
              </CardTitle>
              <CardDescription className="space-y-4 pt-3">
                <h1 className="font-bold text-xl">{card.title}</h1>
                <p>{card.titleP}</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8">
              <div className="space-y-2">
                <h1>{card.contentHeading}</h1>
                <h2>{card.listHeading}</h2>
                <ul
                  className={`${
                    card.listStyle ? card.listStyle : "list-disc"
                  } marker:text-secondary pl-6 space-y-3`}
                >
                  {card.list?.map((item) => (
                    <li key={item}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size={"lg"}>
                Get the E book
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default ContentLibrary;
