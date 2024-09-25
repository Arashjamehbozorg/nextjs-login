import MenuMobile from "../components/menu-mobile";
import HeaderMobile from "../components/header-mobile";
import InfoComponent from "./component-home-mobile/home-mobile-component";
export default function HomeMobile() {
  return (
    <div className=" container-page px-[29px]">
      <div className="min-h-screen w-full md:w-2/5 mx-auto relative md:pb-56">
        <HeaderMobile title="خانه" />
        <div className="pb-[31px]">
          <h2 className="text-[#002361] text-[23px] font-medium leading-5 pb-[10px]">
            ما کنار شما هستیم!
          </h2>
          <h3 className="text-[#79B3E5] text-[17px] leading-5">
            بدون نگرانی زندگی کن!
          </h3>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-2">
          <InfoComponent
            colorCode="rgba(121, 179, 229, 0.2)"
            opacity="20"
            gridClassName="col-span-2 flex-row"
            iconName="check"
            firstParagraph="خدمات شاغلین"
            secondParagraph="صندوق حمایت و بازنشستگی"
            firstTitle="About"
            secondTitle="Us"
            textColor="#79B3E5"
          />
          <InfoComponent
            colorCode="rgba(255, 120, 0, 0.3)"
            opacity="30"
            gridClassName="row-span-2 flex-col"
            iconName="health"
            firstParagraph="خدمات درمانی"
            secondParagraph="صندوق حمایت و بازنشستگی"
            firstTitle="Health"
            secondTitle="Services"
            textColor="#FF7800"
          />
          <InfoComponent
            colorCode="rgba(33, 198, 190, 0.3)"
            opacity="30"
            gridClassName="row-span-2 flex-col"
            iconName="welfare"
            firstParagraph="خدمات رفاهی"
            secondParagraph="صندوق حمایت و بازنشستگی"
            firstTitle="Welfare"
            secondTitle="Services"
            textColor="#21C6BE"
          />
          <InfoComponent
            colorCode="rgba(141, 225, 206, 0.2)
            "
            opacity="20"
            gridClassName="col-span-2 flex-row"
            iconName="pension"
            firstParagraph="خدمات درمانی"
            secondParagraph="خدمات بازنشستگان"
            firstTitle="Pension"
            secondTitle="Services"
            textColor="#8DE1CE"
          />
        </div>
        <MenuMobile />
      </div>
    </div>
  );
}
