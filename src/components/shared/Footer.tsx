import logo from "@/assets/image/logo.png";
import { Facebook, Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  const style1 = "flex flex-col gap-2 items-start justify-start";
  const style2 = "flex gap-2 items-center justify-center";
  const contactStyle =
    "text-primary hover:text-tertiary transition-colors duration-300 ease-in-out font-bold text-sm";
  const docLinkStyle =
    "px-1 text-sm md:text-base md:px-2 font-bold text-primary hover:text-tertiary ";
  const menuTitleStyle = "font-bold text-base md:text-lg";

  return (
    <footer className="w-full h-fit pt-2 sm:pt-4 md:pt-6 px-2 sm:px-4 md:px-12 space-y-4 bg-zinc-800 rounded-t-xl">
      <div className="w-48 mx-auto">
        <img src={logo} alt="Footer Logo" />
      </div>
      <main className="flex items-start gap-4 md:gap-0 justify-between md:justify-evenly flex-wrap md:flex-nowrap">
        <div className={style1}>
          <h3 className={menuTitleStyle}>Sales:</h3>
          <a className={contactStyle} href="mailto:contact@allyms.com">
            contact@allyms.com
          </a>
          <a className={contactStyle} href="tel:8632436914" rel="noopener">
            (863) 243-6914
          </a>
        </div>
        <div className={style1}>
          <h3 className={menuTitleStyle}>Support:</h3>
          <a className={contactStyle} href="mailto:support@allyms.com">
            support@allyms.com
          </a>
          <a className={contactStyle} href="tel:800930-0587" rel="noopener">
            (800) 930-0587
          </a>
        </div>
        <div className="space-y-4">
          <h3 className={menuTitleStyle}>Social Links:</h3>
          <div className={style2}>
            <a
              className={contactStyle}
              href="https://www.linkedin.com/company/ArchiSoft Care-ms/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.facebook.com/people/ArchiSoft Care-MS/100064991194948/"
              target="_blank"
              className={contactStyle}
            >
              <Facebook />
            </a>
            <a
              href="https://www.youtube.com/channel/UCXT7J8_zvnGp5VJ4bbKr3oA"
              target="_blank"
              className={contactStyle}
            >
              <Youtube />
            </a>
          </div>
        </div>
      </main>
      <div className="border-t border-zinc-600 py-3 flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="text-sm md:text-base">
          &copy;&nbsp;Copyright 2024. All Rights Reserved
        </div>
        <div className="divide-x divide-white">
          <a
            href="https://www.iubenda.com/privacy-policy/26724603"
            role="menuitem"
            target="_blank"
            rel="noopener"
            className={docLinkStyle}
          >
            Privacy Policy{" "}
          </a>
          <a
            href="https://www.iubenda.com/privacy-policy/26724603/cookie-policy"
            role="menuitem"
            target="_blank"
            rel="noopener"
            className={docLinkStyle}
          >
            Cookie Policy
          </a>
          <a
            href="https://www.iubenda.com/terms-and-conditions/26724603"
            role="menuitem"
            target="_blank"
            rel="noopener"
            className={docLinkStyle}
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
