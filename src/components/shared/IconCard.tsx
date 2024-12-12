import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ReactElement } from "react";

const IconCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  showBtn?: boolean;
  className?: string;
  element?: ReactElement;
}> = ({ icon, title, description, showBtn = true, className, element }) => {
  return (
    <Card className={`bg-zinc-800 ${className}`}>
      <CardHeader>
        <div className="w-20 mx-auto">
          <img src={icon} alt={title} />
        </div>
        <CardTitle className="font-bold text-lg text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description && <p className="text-sm text-center">{description}</p>}
        {element && <>{element}</>}
      </CardContent>
      {showBtn && (
        <CardFooter className="flex items-center justify-end md:justify-center">
          <Button variant="outline" size={"icon"} className="text-xl">
            &rarr;
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default IconCard;
