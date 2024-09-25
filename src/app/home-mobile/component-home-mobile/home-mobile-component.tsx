import CheckIconBlue from "../../../../public/icons/ICON-26.svg";
import HealthIconOrange from "../../../../public/icons/ICON-05.svg";
import WelfareIconGreen from "../../../../public/icons/ICON-06.svg";
import PensionIconGreen from "../../../../public/icons/ICON-07.svg";

interface InfoComponentProps {
  colorCode: string;
  opacity: string;
  gridClassName: string;
  iconName: string;
  firstParagraph: string;
  secondParagraph: string;
  firstTitle: string;
  secondTitle: string;
  textColor: string;
}
export default function InfoComponent({
  colorCode,
  opacity,
  gridClassName,
  iconName,
  firstParagraph,
  secondParagraph,
  firstTitle,
  secondTitle,
  textColor,
}: InfoComponentProps) {
  return (
    <div
      className={`bg-[${colorCode}] bg-opacity-${opacity} ${gridClassName} p-4 shadow rounded-[30px] flex justify-between items-center`}
      style={{
        backgroundColor: colorCode,
      }}
    >
      <div className="icon w-[64px] h-[64px] rounded-full bg-[#fff] flex justify-center items-center">
        {iconName == "check" && <CheckIconBlue height={38} width={38} />}
        {iconName == "health" && <HealthIconOrange height={38} width={38} />}
        {iconName == "welfare" && <WelfareIconGreen height={38} width={38} />}
        {iconName == "pension" && <PensionIconGreen height={38} width={38} />}
      </div>

      <div className="flex flex-col gap-1">
        <p
          className={`!font-bold !text-[21px] !leading-5 text-center`}
          style={{
            color: textColor,
          }}
        >
          {firstParagraph}
        </p>
        <p className="text-[#002361] text-[14px] leading-4">
          {secondParagraph}
        </p>
      </div>
      <h3
        className={` text-[22px] pb-[6px] text-left relative`}
        style={{
          color: textColor,
        }}
      >
        {firstTitle}
        <span
          className="absolute top-5 left-0"
          style={{
            color: textColor,
          }}
        >
          {secondTitle}
        </span>
      </h3>
    </div>
  );
}
