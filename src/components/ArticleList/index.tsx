import React, { FC } from 'react';
import styles from './articleList.module.scss';
import classnames from 'classnames/bind';
import Pagination from '../Pagination';
import ArticleItem from './ArticleItem';
import { Article } from '../../types/articles';

const cx = classnames.bind(styles);

type Props = {
  articles: Article[];
};

const ArticleList: FC<Props> = props => {
  const { articles } = props;

  return (
    <>
      <div className={cx('blog-container')}>
        <div className={cx('blog-wrap')}>
          <div className={cx('slide-up')}>
            <h1 className={cx('blog-title')}>Lorem Ipsum</h1>
          </div>
          <div className={cx('slide-up')}>
            <p className={cx('blog-sub-title')}>What is Lorem Ipsum?</p>
          </div>
          <div className={cx('slide-up')}>
            <section className={cx('blog-filter')}>
              <ul className={cx('blog-filter-list')}>
                <a className={cx('filter-item')} href="">
                  <span className={cx('filter-item-hash')}>#</span>hash1
                </a>
                <a className={cx('filter-item')} href="">
                  <span className={cx('filter-item-hash')}>#</span>hash2
                </a>
                <a className={cx('filter-item')} href="">
                  <span className={cx('filter-item-hash')}>#</span>hash3
                </a>
                <a className={cx('filter-item')} href="">
                  <span className={cx('filter-item-hash')}>#</span>hash4
                </a>
                <a className={cx('filter-item')} href="">
                  <span className={cx('filter-item-hash')}>#</span>hash5
                </a>
              </ul>
            </section>
          </div>
          <div className={cx('slide-up')}>
            <section className={cx('blog-post-list')}>
              {articles.map(article => {
                return <ArticleItem key={article.frontmatter.slug} article={article} />;
              })}
            </section>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default ArticleList;
