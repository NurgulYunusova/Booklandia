import Intro from "../components/intro/Intro";
import Pages from "../components/pages/Pages";
import Categories from "../components/categories/Categories";

function HomePage() {
  return (
    <>
      <Pages />
      <Intro />
      <Categories />
    </>
  );
}

export default HomePage;
