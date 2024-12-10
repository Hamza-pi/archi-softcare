import logo from "../../assets/image/logo.png";

const FallBack = () => {
  return (
    <div className="h-screen w-screen bg-zinc-900 flex flex-col items-center justify-center">
      <img className="w-96 animate-pulse object-cover" src={logo} alt="" />
    </div>
  );
};

export default FallBack;
