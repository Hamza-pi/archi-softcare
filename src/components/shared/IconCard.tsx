import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const IconCard: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <Card className="bg-zinc-800">
      <CardHeader>
        <div className="w-20 mx-auto">
          <img src={icon} alt={title} />
        </div>
        <CardTitle className="font-bold text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size={"icon"} className="text-xl">
          &rarr;
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IconCard;
