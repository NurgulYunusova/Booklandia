import Intro from "../components/intro/Intro";
import Pages from "../components/pages/Pages";
import Categories from "../components/categories/Categories";
import Bestsellers from "../components/bestsellers/Bestsellers";
import IntermediatePart from "../components/intermediatePart/IntermediatePart";
import NewBooks from "../components/newBooks/NewBooks";
import Testimonials from "../components/Testimonials/Testimonials";

function HomePage() {
  return (
    <>
      <Pages />
      <Intro />
      <Categories />
      <Bestsellers />
      <IntermediatePart />
      <NewBooks />
      <Testimonials />
    </>
  );
}

export default HomePage;
