import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-full relative overflow-hidden bg-black dark:bg-white text-background dark:text-background">
        <div className="container mx-auto w-full h-full flex items-center justify-between py-6">
          <span>© 2025 - Wisata App Test. All rights reserved.</span>
          <div className="flex gap-x-2">
            <Instagram />
            <Facebook />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
