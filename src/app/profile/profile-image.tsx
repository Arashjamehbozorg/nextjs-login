import Image from "next/image";
import personImg from "../../../public/profile-pic.jpg";
const ProfileImg = () => {
  return (
    <div className="p-2 w-2/5">
      <Image
        height={250}
        width={270}
        src={personImg}
        alt="person-avatar"
        priority
        className="rounded-3xl"
      ></Image>
    </div>
  );
};
export default ProfileImg;
