import { GiHamburgerMenu } from "react-icons/gi";
import LogoMenu from "./logo-menu";
import SendIcon from "../../../public/icons/ICON-04.svg";
interface HeaderMobileProps {
  title: string;
}
export default function HeaderMobile({ title }: HeaderMobileProps) {
  return (
    <header className="w-full pt-12">
      <div className="flex flex-row justify-between items-center pb-8">
        <div className="flex items-center">
          <LogoMenu />
        </div>

        {title == "ارسال مدارک" ? (
          <SendIcon width={55} height={55} />
        ) : (
          <h3 className="text-[002361] text-xl">{title}</h3>
        )}

        <div>
          <GiHamburgerMenu size={34} color="#002361" />
        </div>
      </div>
    </header>
  );
}
