interface TextAreaProps {
  id: string;
  classNames: string;
  placeholder: string;
}

export default function TextArea({
  id,
  classNames,
  placeholder,
}: TextAreaProps) {
  return (
    <>
      <textarea id={id} className={classNames} placeholder={placeholder} />
    </>
  );
}
