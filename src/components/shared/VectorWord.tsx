import { VectorWordProps } from "@/lib/interface";
import vector from "@/assets/image/headingVector.png";

const VectorWord = ({ title }: VectorWordProps) => {
  return (
    <div className="relative inline-block">
      <img
        src={vector}
        alt="heading vector"
        className="absolute -bottom-1 left-0 w-full h-4"
      />
      <span className="relative">{title}</span>
    </div>
  );
};

export default VectorWord;
