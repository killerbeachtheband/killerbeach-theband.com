import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 flex h-20 items-center justify-between px-5">
      <Link href="/" className="text-2xl font-bold">
        Killer Beach
      </Link>
    </header>
  );
}
