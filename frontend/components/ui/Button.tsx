import Link from "next/link";
import { cx } from "@/lib/utils";

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition will-change-transform";

  const styles = {
    primary:
      "bg-[hsl(var(--accent))] text-white shadow-sm hover:opacity-95 hover:-translate-y-[1px] active:translate-y-0",
    ghost:
      "bg-transparent text-[hsl(var(--text))] hover:bg-black/5",
    outline:
      "border border-[hsl(var(--accent))] text-[hsl(var(--accent))] bg-transparent hover:bg-[hsl(var(--accent))]/5 hover:-translate-y-[1px] active:translate-y-0",
  }[variant];

  if (href) {
    return (
      <Link href={href} className={cx(base, styles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cx(base, styles, className)}>
      {children}
    </button>
  );
}
