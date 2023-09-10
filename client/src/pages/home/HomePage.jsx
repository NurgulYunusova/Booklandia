import Intro from "../../components/intro/Intro";
import Categories from "../../components/categories/Categories";
import Bestsellers from "../../components/bestsellers/Bestsellers";
import IntermediatePart from "../../components/intermediatePart/IntermediatePart";
import NewBooks from "../../components/newBooks/NewBooks";
import PopularAuthors from "../../components/popularAuthors/PopularAuthors";
import Testimonials from "../../components/testimonial/Testimonials";
import WebsiteSuccess from "../../components/websiteSuccess/WebsiteSuccess";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Pages />
          <Intro />
          <Categories />
          <Bestsellers />
          <IntermediatePart />
          <NewBooks />
          <Testimonials />
          <PopularAuthors />
          <WebsiteSuccess />
          <Footer />
        </>
      )}
    </>
  );
}

export default HomePage;
