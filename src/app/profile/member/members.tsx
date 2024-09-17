import MemberAvatar from "./member-avatar";

export default function Members() {
  return (
    <div className="flex flex-row bg-[#e5f0fa] p-3 rounded-full mt-5 w-4/12">
      <div className="flex flex-row gap-3">
        <MemberAvatar />
        <MemberAvatar />
        <MemberAvatar />
      </div>
      {/* <div className="flex">
        <div className=" h-14 w-14 bg-black rounded-full"></div>
      </div> */}
    </div>
  );
}
