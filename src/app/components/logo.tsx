import Image from "next/image";
import SalamatnegarLogo from "../../../public/LogoBig.png";

const Logo = () => {
  return (
    <div className="flex justify-center mb-7">
      <Image src={SalamatnegarLogo} alt="www.Radisan.com" priority />
    </div>
  );
};

export default Logo;
