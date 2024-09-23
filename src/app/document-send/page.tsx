import { IoLocationSharp } from "react-icons/io5";
import { Button } from "../login/button";
import ChatFooter from "../components/chat-footer";
import MenuMobile from "../components/menu-mobile";
export default function DocumentSend() {
  return (
    <div className="container-page px-[29px] ">
      <div className="w-full md:w-2/5 ">
        <label
          htmlFor="address"
          className=" block pb-3 text-[#002361] text-right text-sm font-bold leading-5 px-[18px] cursor-pointer"
        >
          آدرس خود را برای ارئه مدارک انتخاب کنید
        </label>
        <textarea
          id="address"
          className="mb-[5px] bg-[#F0F0F0] border-based w-full px-[18px] py-[10px] placeholder:text-sm text-sm leading-5 h-16 resize-none"
          placeholder="بلوار کریم خان زند، خیابان استاد نجات الهی، خیابان خسرو، پلاک ۳۸، واحد ۱۵"
        />
        <div className="relative flex items-center mb-[11px]">
          <span className="absolute right-[18px] top-[9px] text-[#002361] flex items-center">
            <IoLocationSharp size={20} />
          </span>
          <textarea
            className="min-h-[125px] bg-[#F0F0F0] placeholder:text-[#002361] pr-10 border-based w-full px-[18px] py-[10px] placeholder:text-sm text-sm leading-5 h-16 resize-none"
            placeholder="نقشه"
          />
        </div>
        <div className="mb-20">
          <label
            htmlFor="telephone"
            className=" block pb-3 text-[#002361] text-right text-sm font-bold leading-5 px-[18px] cursor-pointer"
          >
            شماره تماس فرد تحویل گیرنده
          </label>
          <input
            type="text"
            id="telephone"
            className="mt-2 mb-[5px] bg-[#F0F0F0] border-based w-full px-[18px] py-[10px] placeholder:text-sm text-sm leading-5 input-login resize-none"
            placeholder="مثال: ۴۴ ۲۴ ۲۰۱ ۰۹۱۲"
          />
        </div>
        <div className="pb-[21px] border-chat">
          <Button>ادامه</Button>
        </div>
        <ChatFooter />
        <MenuMobile />
      </div>
    </div>
  );
}
