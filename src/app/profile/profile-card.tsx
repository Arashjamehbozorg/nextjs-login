import InfoProfile from "./info-profile";
import ProfileImg from "./profile-image";

const ProfileCard = () => {
  return (
    <div className="flex flex-row rounded-3xl bg-[#f0f0f0] mb-8">
      <ProfileImg />
      <InfoProfile />
    </div>
  );
};
export default ProfileCard;
