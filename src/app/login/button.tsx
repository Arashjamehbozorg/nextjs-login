interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="flex justify-center items-center py-4 w-full bg-[#8DE1CE] text-base h-11 font-bold hover:bg-[#5cb85c] text-white transition-colors duration-500 delay-[0.1s] ease-[cubic-bezier(0.19,1,0.22,1)]"
      style={{ borderRadius: "21px" }}
    >
      {children}
    </button>
  );
};
