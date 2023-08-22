/* eslint-disable no-unused-vars */
import Intro from "../../components/intro/Intro";
import Categories from "../../components/categories/Categories";
import Bestsellers from "../../components/bestsellers/Bestsellers";
import IntermediatePart from "../../components/intermediatePart/IntermediatePart";
import NewBooks from "../../components/newBooks/NewBooks";
import PopularAuthors from "../../components/popularAuthors/PopularAuthors";
import Testimonials from "../../components/testimonials/Testimonials";
import WebsiteSuccess from "../../components/websiteSuccess/WebsiteSuccess";
import Header from "../../components/header/Header";
import Pages from "../../components/pages/Pages";
import Footer from "../../components/footer/Footer";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import Loading from "../../components/loading/Loading";

function HomePage() {
  const { isLoading } = useContext(BookContext);

  return (
    <>
      {/* {isLoading ? (
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
      )} */}

      {/* <Header />
      <Pages /> */}
      <Intro />
      {/* <Categories />
      <Bestsellers />
      <IntermediatePart />
      <NewBooks />
      <Testimonials />
      <PopularAuthors />
      <WebsiteSuccess /> */}
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
