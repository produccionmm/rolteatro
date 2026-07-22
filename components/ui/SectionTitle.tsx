interface SectionTitleProps {
  subtitle: string;
  title: string;
  description: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-4xl text-center">
      <p className="uppercase tracking-[0.45em] text-red-500">
        {subtitle}
      </p>

      <h2 className="mt-5 text-5xl font-black">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
        {description}
      </p>
    </div>
  );
}