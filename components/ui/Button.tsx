interface ButtonProps {
  children: React.ReactNode;
  href?: string;
}

export default function Button({
  children,
  href = "#",
}: ButtonProps) {
  return (
    <a
      href={href}
      className="
      inline-flex
      items-center
      justify-center
      rounded-xl
      bg-red-700
      px-8
      py-4
      font-bold
      transition-all
      duration-300
      hover:scale-105
      hover:bg-red-600
      hover:shadow-[0_0_25px_rgba(220,38,38,.45)]
      "
    >
      {children}
    </a>
  );
}