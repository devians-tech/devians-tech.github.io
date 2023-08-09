import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-around text-white">
      <div>
        <Link href="/">
          <Image
            src="/images/devians-logo.png"
            alt="Logo da Devians"
            width={48}
            height={200}
            className="w-16"
          />
        </Link>
      </div>
      <div className="flex gap-40">
        <button className="hover:text-yellow-400 font-bold">Home</button>
        <button className="hover:text-yellow-400 font-bold">About</button>
        <button className="hover:text-yellow-400 font-bold">Contact</button>
      </div>
    </header>
  );
}
