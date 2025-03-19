import Link from "next/link";

const nabVar = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Training",
    link: "/training",
  },
  {
    id: 4,
    name: "Career",
    link: "/career",
  },

  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];
const Navbar = () => {
  return (
    <nav className="flex flex-col items-start justify-start gap-8 lg:flex-row lg:gap-10">
      {nabVar.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className="nav-underline font-raleway text-xl font-extrabold uppercase text-e-primary duration-200 hover:font-black hover:text-[#28a745]"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
