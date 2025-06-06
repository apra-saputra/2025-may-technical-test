import {
  CopyIcon,
  FacebookIcon,
  MessageCircle,
  Share2Icon,
  TwitterIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface ShareButtonProps {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null;
  id: string;
  text: string;
}

export function ShareButton({ variant, id, text }: ShareButtonProps) {
  // const location = useLocation(); // Ambil lokasi saat ini
  let url = `${window.location.origin}/details/${id}`; // Dapatkan URL saat ini
  const data = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      fn: () => {
        url += `?text=${text}`;
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
      },
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      fn: () => {
        url += `?text=${text}`;
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
          "_blank"
        );
      },
    },
    {
      name: "Whatsapp",
      icon: MessageCircle,
      fn: () => {
        const text2 = encodeURIComponent(text);
        window.open(`https://wa.me/?text=${text2}%20${url}`, "_blank");
      },
    },
    {
      name: "Copy Link",
      icon: CopyIcon,
      fn: () => {
        navigator.clipboard.writeText(url).then(() => {
          toast("Link copied to clipboard!");
        });
      },
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant || "outline"} className="rounded-2xl">
          <Share2Icon />
          <span className="">Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {data.map((link) => (
          <DropdownMenuItem onClick={link.fn} key={link.name}>
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
