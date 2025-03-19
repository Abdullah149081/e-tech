import assets from "@/assets";
import Container from "@/components/ui/container";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerData = [
  {
    id: 1,
    title: "Opening hours",
    icon: Clock,
    subData: ["Monday - Sunday", "9:00 AM to 11:30 PM"],
  },
  {
    id: 2,
    title: "LET'S TALK",
    icon: PhoneCall,
    subData: ["Phone: 1-800-222-4545", "Fax: 1-800-222-4545"],
  },
  {
    id: 3,
    title: "BOOK A TABLE",
    icon: Mail,
    subData: ["Email: demo@website.com", "Fax: 1-800-222-4545"],
  },
  {
    id: 4,
    title: "Our Address",
    icon: MapPin,
    subData: ["123, New Lenox Chicago, IL 60606", "United States"],
  },
];

const socialMedia = [
  {
    id: 1,
    icon: assets.icons.fb,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icon: assets.icons.tw,
    link: "https://twitter.com/",
  },
  {
    id: 3,
    icon: assets.icons.instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: 4,
    icon: assets.icons.ln,
    link: "https://www.linkedin.com/",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-bg">
      <Container className="h-full py-[30px] lg:py-[120px]">
        <div className="flex flex-col items-center justify-start gap-[60px] lg:gap-[120px]">
          <div className="flex flex-col items-center justify-start gap-[72px] self-stretch">
            <div className="flex flex-col items-center justify-start gap-12 self-stretch">
              <h1 className="self-stretch text-center font-bebas_Neue text-[40px] font-bold leading-[48px] tracking-wide text-white lg:text-[62px] lg:leading-[64px]">
                We ready to have you the best dining experiences
              </h1>
              <div className="flex flex-col justify-center gap-6 self-stretch lg:flex-row lg:items-start lg:justify-start">
                {footerData.map((data) => (
                  <div
                    key={data.id}
                    className="flex shrink grow basis-0 flex-col items-center justify-start gap-6"
                  >
                    <data.icon className="relative size-[30px] text-[#FEBF00]" />
                    <div className="flex flex-col items-center justify-start gap-3 self-stretch">
                      <h2 className="font-bebas_Neue text-2xl uppercase leading-7 tracking-wider text-white">
                        {data.title}
                      </h2>
                      <p className="flex flex-col self-stretch text-center font-roboto text-base font-normal leading-[25px] text-[#f7f8f9]">
                        {data.subData.map((subData) => (
                          <span key={subData}>{subData}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 lg:gap-[25px]">
            <div className="flex items-start justify-start gap-[16.16px] lg:gap-6">
              {socialMedia.map((data) => (
                <div
                  key={data.id}
                  className="flex flex-col items-start justify-start rounded-[44.18px] border border-gray-200 p-[9.92px] lg:p-[14.73px]"
                >
                  <Link href={data.link}>
                    {" "}
                    <Image
                      src={data.icon}
                      alt={data.icon}
                      className="size-[16.16px] lg:size-6"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <p className="font-roboto text-base font-normal tracking-wide text-white lg:text-[21px]">
              <span>© {currentYear} </span>
              <span>All Rights Reserved </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
