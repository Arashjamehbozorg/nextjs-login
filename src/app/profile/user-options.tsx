interface UserOptionsProps {
  text: string;
}

const UserOptions = ({ text }: UserOptionsProps) => {
  return (
    <div className="flex border-2 rounded-full bg-[#e5f0fa] py-3 justify-center items-center h-[45] border-[#79B4E4] mt-2 w-2/3">
      <span className="text-base font-normal text-[#7AB3E4]">{text}</span>
    </div>
  );
};
export default UserOptions;
