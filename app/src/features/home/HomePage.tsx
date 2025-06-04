import CardDairy from "./components/CardDairy";

const HomePage = () => {
  return (
    <section>
      <div>homePage</div>
      <div className="flex flex-wrap gap-2">
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <CardDairy key={index} />
          ))}
      </div>
    </section>
  );
};

export default HomePage;
