import HeaderMobile from "../components/header-mobile";
import { LuCheckCircle } from "react-icons/lu";
import ChatFooter from "../components/chat-footer";
import MenuMobile from "../components/menu-mobile";
export default function AboutUs() {
  return (
    <div className=" container-page px-[29px]">
      <div className="min-h-screen w-full md:w-2/5 mx-auto relative">
        <HeaderMobile title="درباره ما" />
        <div className="about-us mb-6">
          <div className="flex justify-between pb-[29px]">
            <div className="bg-[#FFF] w-[64px] h-[64px] rounded-full flex justify-center items-center">
              <LuCheckCircle color="#79B3E5" size={38} className="check-icon" />
            </div>
            <div>
              <h3 className="text-[#79B3E5] text-[22px] pb-[6px] text-left relative">
                About <span className="absolute top-5 left-0  ">Us</span>
              </h3>
            </div>
          </div>
          <h2 className="text-[#79B3E5] text-[21px] font-bold">درباره ما</h2>
          <p className="leading-5">
            هزینه های سرسام آور درمانی را در طول زندگی، برای خود و خانواده تان
            <br /> کاهش بدهید ؟!
          </p>
        </div>
        <h2 className="text-[#002361] text-[17px] font-bold leading-4 pb-4">
          شرکت توسعه سلامت‌نگر آینده ساز
        </h2>
        <div className="">
          <p className="pb-3">
            شرکت توسعه سلامت نگر آینده ساز از ابتدای سال 1398 با هدف مدیریت
            خدمات مورد نیاز مشتریان خود جهت ارائه بهترین شیوه خدمت رسانی در حوزه
            بهداشت و درمان، فعالیت خود را آغاز کرد و تاکنون بیش از یک میلیون
            خدمت درمانی به اعضای خود ارائه نموده است.
          </p>
          <p>
            یک گروه هم دل و همراه، برای ارائه خدماتی متمایز. گروهی که تلاش می
            کند هر روز بهتر از دیروز باشد و با شنیدن حرف های شما، در نهایت یاری
            رسان خوبی باشد. گروهی جوان، پرانگیزه و با نشاط که با صداقت مشغول کار
            است. این گروه همواره تلاش می کند در جهت تحول و ایجاد مجموعه ای
            دیجیتال و خدمت رسان مبتنی بر فناوری های روز قدم بردارد.
          </p>
        </div>

        <MenuMobile />
      </div>
    </div>
  );
}
