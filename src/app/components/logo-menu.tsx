import Image from "next/image";
import SalamatnegarLogoMenu from "../../../public/logo-menu.png";

const LogoMenu = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={SalamatnegarLogoMenu}
        alt="www.Radisan.com"
        priority
        width={48}
        height={48}
      />
    </div>
  );
};

export default LogoMenu;
