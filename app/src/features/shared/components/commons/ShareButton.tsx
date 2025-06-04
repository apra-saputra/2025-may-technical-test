import { FacebookIcon, InstagramIcon, Share2Icon, TwitterIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export function ShareButton() {
  const data = [
    { name: "Facebook", icon: FacebookIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Instagram", icon: InstagramIcon },
  ];

  const openShare = () => {};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-2xl">
          <Share2Icon />
          <span className="">Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {data.map((link) => (
          <DropdownMenuItem onClick={() => openShare()} key={link.name}>
            <div className="flex gap-2">
              {<link.icon />}
              <span>{link.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
