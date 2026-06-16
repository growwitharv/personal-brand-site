type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {label && <p className="label mb-4">{label}</p>}
      <h2 className="heading-lg text-white">{title}</h2>
      {description && <p className="mt-4 body-md">{description}</p>}
    </div>
  );
}
