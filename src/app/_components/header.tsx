import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        大学の統計学
      </Link>
      .
    </h2>
  )
  }

export default Header;