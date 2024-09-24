interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="group py-4 px-8 bg-[#33485e] rounded-xl font-semibold hover:bg-[#5cb85c] text-white transition-colors duration-500 delay-[0.1s] ease-[cubic-bezier(0.19,1,0.22,1)]">
      <div className="overflow-hidden relative">
        <p className="text-white group-hover:translate-y-[-30px] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
        <p
          aria-hidden
          className="absolute left-0 top-5 text-white group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
        >
          {children}
        </p>
      </div>
    </button>
  );
};
