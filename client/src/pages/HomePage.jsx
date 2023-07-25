import Intro from "../components/intro/Intro";
import Pages from "../components/pages/Pages";
import Categories from "../components/categories/Categories";
import Bestsellers from "../components/bestsellers/Bestsellers";

function HomePage() {
  return (
    <>
      <Pages />
      <Intro />
      <Categories />
      <Bestsellers />
    </>
  );
}

export default HomePage;
