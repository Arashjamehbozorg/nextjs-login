import Image from "next/image";
import SalamatnegarLogo from "../../../public/LogoBig.png";

const Logo = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={SalamatnegarLogo}
        alt="www.Radisan.com"
        width={152}
        height={152}
        priority
      />
    </div>
  );
};

export default Logo;
