import Members from "./member/members";
import ProfileCard from "./profile-card";
export default function Profile() {
  return (
    <div className="container-page mx-auto">
      <ProfileCard />
      <h2 className="text-[#002362] ">اعضای تحت پوشش</h2>
      <Members />
    </div>
  );
}
