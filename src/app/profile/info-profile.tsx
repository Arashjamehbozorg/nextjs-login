import { FaRegEdit } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

// for national code and status also includes the period of time that the person has the insurance
const InfoProfile = () => {
  return (
    <div className="rounded-lg text-[#002361] pr-3 pl-8 md:w-fit w-full ">
      <div className="border-b border-white">
        <h2 className="text-lg pt-5 pb-3 font-semibold  ">مریم محمدی</h2>
      </div>

      <p className="py-3 text-[#002361] font-thin border-b border-white">
        بيمه نامه مربوط به تاريخ <br></br> ۱۴۰۳/۱۲/۲۹ تا ۱۴۰۴/۱۲/۲۹
      </p>
      <div className="text-[#002361] pb-2 border-b border-white">
        <p className="text-[#002361] font-thin pt-2">شماره ملی: ۸۷۶۵۴</p>
        <div className="flex flex-row gap-1 items-center text-[#002362] pb-2">
          <p className="font-thin text-[#002361]">وضعیت: فعال</p>
          <FaRegCheckCircle fontSize="1.1em" style={{ color: "#5cb85c" }} />
        </div>
      </div>
      <div className="py-3">
        <div className=" flex flex-row items-center gap-1 text-[#002361] text-xs font-bold ">
          <FaRegEdit size={18} />
          ویرایش اطلاعات
        </div>
      </div>
    </div>
  );
};
export default InfoProfile;
