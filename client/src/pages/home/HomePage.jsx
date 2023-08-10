import Intro from "../../components/intro/Intro";
import Categories from "../../components/categories/Categories";
import Bestsellers from "../../components/bestsellers/Bestsellers";
import IntermediatePart from "../../components/intermediatePart/IntermediatePart";
import NewBooks from "../../components/newBooks/NewBooks";
import PopularAuthors from "../../components/popularAuthors/PopularAuthors";
import Testimonials from "../../components/testimonials/Testimonials";
import WebsiteSuccess from "../../components/websiteSuccess/WebsiteSuccess";

function HomePage() {
  return (
    <>
      <Intro />
      <Categories />
      <Bestsellers />
      <IntermediatePart />
      <NewBooks />
      <Testimonials />
      <PopularAuthors />
      {/* <WebsiteSuccess /> */}
    </>
  );
}

export default HomePage;
