export default function OptionsBox() {
  return (
    <div className="flex w-full h-[67] justify-center items-center text-base font-normal gap-2 mb-6">
      <div className=" text-white flex justify-center rounded-xl text-center items-center h-full bg-[#79B3E5] px-9 py-3">
        <span className="">ورود ایرانیان با کد ملی</span>
      </div>
      <div className="text-[#002361] flex justify-center text-center items-center h-full bg-[#F0F0F0] rounded-xl px-9 py-3">
        <span>ورود اتباع خارجی با کد فیدا</span>
      </div>
    </div>
  );
}
