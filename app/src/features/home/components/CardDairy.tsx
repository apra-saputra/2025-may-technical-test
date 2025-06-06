import { ShareButton } from "@/features/shared/components/commons/ShareButton";
import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/features/shared/components/ui/card";
import type { Dairy } from "@/libs/types/dairy";

import React from "react";
import { useNavigate } from "react-router";

interface CardDairyProps {
  id: string;
  data: Dairy;
}

const CardDairy: React.FC<CardDairyProps> = ({ id, data }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/details/${id}`);
  };
  return (
    <Card
      className="px-6 md:min-w-[300px] cursor-pointer duration-300 hover:bg-primary/90 transition-all select-none"
      onClick={onClick}
    >
      <CardHeader>
        <CardDescription>Dairy - {id}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums ">
          <img
            src={data.meta.image}
            alt="poster"
            className="object-cover aspect-video w-full transition-all duration-500 transform hover:scale-95"
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-semibold line-clamp-3">{data.meta.title}</p>
        <span className="text-sm text-gray-500 line-clamp-2">
          {data.meta.description}
        </span>
      </CardContent>
      <CardFooter className="flex-col items-end gap-1.5 text-sm">
        <ShareButton id={data.id} text={data.meta.title} />
      </CardFooter>
    </Card>
  );
};

export default CardDairy;
