import { ShareButton } from "@/features/shared/components/commons/ShareButton";
import { Badge } from "@/features/shared/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/features/shared/components/ui/card";

import React from "react";

interface CardDairyProps {}

const CardDairy: React.FC<CardDairyProps> = () => {
  return (
    <Card className="px-6 md:max-w-[300px]">
      <CardHeader>
        <CardDescription>Total Revenue</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums ">
          $1,250.00
        </CardTitle>
        {/* <CardAction>
          <Badge variant="outline">+12.5%</Badge>
        </CardAction> */}
      </CardHeader>
      <CardContent>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur numquam temporibus excepturi maiores nemo! Consequatur enim beatae, eum quis doloribus laudantium modi ea praesentium labore minus explicabo veritatis magni non?</p>
      </CardContent>
      <CardFooter className="flex-col items-end gap-1.5 text-sm">
        <ShareButton />
      </CardFooter>
    </Card>
  );
};

export default CardDairy;
