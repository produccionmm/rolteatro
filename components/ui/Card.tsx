interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  children,
}: CardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#181818] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,.25)]">

      {children}

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-gray-400">
        {description}
      </p>

    </div>
  );
}