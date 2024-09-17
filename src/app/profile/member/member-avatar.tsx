import Image from "next/image";
import avatarIcon from "../../../../public/avatar.png";
export default function MemberAvatar() {
  return (
    <div className="rounded-full h-14 w-14 relative border-2 border-blue-400 flex justify-center items-center overflow-hidden">
      <Image
        alt="avatar"
        src={avatarIcon}
        fill
        style={{ objectFit: "contain" }}
      ></Image>
    </div>
  );
}
