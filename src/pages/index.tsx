import React from 'react';
import ArticleList from '../components/ArticleList';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <ArticleList />
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
