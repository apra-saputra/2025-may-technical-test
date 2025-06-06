import useMetaHeader from "../shared/hooks/useMetaHeader";
import CardDairy from "./components/CardDairy";
import useFetchDairies from "./hooks/useFetchDairies";

const HomePage = () => {
  useMetaHeader({title: "All Dairy"})
  const { data } = useFetchDairies();
  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 my-4">
        {data.content.map((dairy) => (
          <CardDairy key={dairy.id} id={dairy.id} data={dairy} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
