import { Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const Social = [
  {
    name: "Youtube",
    icon: Youtube,
    link: "https://www.youtube.com",
    className: "text-red-600",
  },
  {
    name: "Linkedin",
    icon: Linkedin,
    link: "https://www.linkedin.com",
    className: "text-blue-600",
  },
];

const SocialNav = () => {
  return (
    <div className="flex items-center justify-center gap-4 border-l-2 pl-2">
      {Social.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={`${item.className}`}
          >
            <Icon size={24} />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialNav;
