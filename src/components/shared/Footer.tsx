import logo from "@/assets/image/logo.png";
import { Facebook, Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  const style1 = "flex flex-col gap-4 items-start justify-start";
  const style2 = "flex gap-4 items-center justify-center";
  const docLinkStyle = "px-2 font-bold text-tertiary";

  const menuTitleStyle = "font-bold text-lg";

  return (
    <footer className="w-full h-fit pt-2 sm:pt-6 md:pt-8 px-2 sm:px-4 md:px-12 space-y-4 bg-zinc-800 rounded-t-xl">
      <div className="w-48 mx-auto">
        <img src={logo} alt="Footer Logo" />
      </div>
      <main className="flex items-start justify-evenly">
        <div className={style1}>
          <h3 className={menuTitleStyle}>Sales:</h3>
          <a href="mailto:contact@allyms.com">contact@allyms.com</a>
          <a href="tel:8632436914" rel="noopener">
            (863) 243-6914
          </a>
        </div>
        <div className={style1}>
          <h3 className={menuTitleStyle}>Support:</h3>
          <a href="mailto:support@allyms.com">support@allyms.com</a>
          <a href="tel:800930-0587" rel="noopener">
            (800) 930-0587
          </a>
        </div>
        <div className="space-y-4">
          <h3 className={menuTitleStyle}>Social Links:</h3>
          <div className={style2}>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Linkedin />
            </a>
            <a href="">
              <Youtube />
            </a>
          </div>
        </div>
      </main>
      <div className="border-t border-zinc-600 py-3 flex items-center justify-center gap-4">
        <div>&copy;&nbsp;Copyright 2024. All Rights Reserved</div>
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
