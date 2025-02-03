import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-purple-700 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyWebsite</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-purple-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-purple-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-purple-300 transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-purple-300 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header