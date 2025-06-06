import React from "react";
// import mockUpApp from "@/assets/MockupApp (1).png";
// import appleButton from "@/assets/app-store.png";
// import googleButton from "@/assets/googleplay-badge.png";
import { Link } from "react-router";
import { cn } from "@/libs/utils";
import { Clock, Facebook, Instagram, LocateIcon, Mail } from "lucide-react";

const Footer = () => {
  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  const handleSendEmail = () => {
    window.location.href =
      "mailto:lets@getgoing.co.id?subject=Subject%20Here&body=Isi%20pesan";
  };

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

const LiComponent = ({
  children,
  ...props
}: {
  icon: React.ExoticComponent;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <li
    className={cn("flex items-start space-x-3", props.className)}
    onClick={props.onClick || props.onClick}
  >
    <div className="text-xl mt-1 flex-shrink-0">
      <props.icon />
    </div>
    <span className="leading-5">{children}</span>
  </li>
);

const H4Component = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-semibold text-lg tracking-wider uppercase">{children}</h4>
);
