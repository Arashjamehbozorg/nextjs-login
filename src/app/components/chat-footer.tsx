import { PiMicrophoneLight } from "react-icons/pi";

export default function ChatFooter() {
  return (
    <div className="bg-[#F0F0F0] h-[93px] w-full border-chat p-[17px]">
      <div className="relative bg-[#FFFFFF] h-14 rounded-[28px] justify-between flex items-center pl-2">
        <input
          className=" w-full text-[#002361] text-sm pr-4 "
          placeholder="هر سوالی داری از من بپرس!"
        />

        <div className="bg-[#21C6BE] rounded-full h-[34px] w-[34px] flex justify-center items-center text-[#ffff] ">
          <PiMicrophoneLight size={22} />
        </div>
      </div>
    </div>
  );
}
