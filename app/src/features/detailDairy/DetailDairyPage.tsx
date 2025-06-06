import { useParams } from "react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shared/components/ui/card";
import useFetchDailryDetail from "./hooks/useFetchDailryDetail";
import { dateFormater, dateFormaterFull } from "@/libs/helpers/dateFormater";
import { Separator } from "../shared/components/ui/separator";
import { ShareButton } from "../shared/components/commons/ShareButton";
import ContentComponent from "./components/ContentComponent";
import useMetaHeader from "../shared/hooks/useMetaHeader";

const DetailDairyPage = () => {
  const params = useParams(),
    id = params.id;

  if (!id)
    return (
      <section>
        <div>
          <h1>Not Found, id required</h1>
        </div>
      </section>
    );

  const { data } = useFetchDailryDetail(Number(id));

  useMetaHeader({ ...data.meta });

  return (
    <section className="my-4 w-full">
      <Card className="max-w-[80%] mx-auto ">
        <CardHeader>
          <CardTitle className="text-5xl font-bold">
            {data.meta.title}
          </CardTitle>
          <div className="flex justify-between items-center">
            <span>{dateFormater(data.created_dt)}</span>
            <ShareButton
              variant={"ghost"}
              id={data.id}
              text={data.meta.title}
            />
          </div>
          <Separator />

          {/* <div dangerouslySetInnerHTML={{ __html: data.content }} /> */}
        </CardHeader>
        <CardContent className="mx-auto">
          <ContentComponent source={data.content} />
        </CardContent>
        <CardFooter className="flex flex-col justify-start w-full items-start">
          <span>{dateFormaterFull(data.created_dt)}</span>
          <Separator />
          <div className="flex w-full justify-between items-center mt-2">
            <div></div>
            <ShareButton
              variant={"ghost"}
              id={data.id}
              text={data.meta.title}
            />
          </div>
        </CardFooter>
      </Card>
    </section>
  );
};

export default DetailDairyPage;
