import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 z-50 flex h-16 w-full items-center justify-center bg-neutral-950">
      <Link href="/" className="text-2xl font-bold">
        <Image
          src="/killer-beach-logo-white-transparent.png"
          alt="logo"
          width={1873}
          height={298}
          className="h-7 w-auto"
        />
      </Link>
    </header>
  );
}
