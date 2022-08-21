import React, { FC, useMemo, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import styles from './articleList.module.scss';
import classnames from 'classnames/bind';
import Pagination from '../Pagination';
import ArticleItem from './ArticleItem';
import { Article } from '../../types/articles';
import { uniq, drop } from 'lodash';
import qs from 'qs';
import { useURLQuery } from '../../hooks/common.hook';

const cx = classnames.bind(styles);

type Props = {
  articles: Article[];
};

const ArticleList: FC<Props> = props => {
  const { articles } = props;
  const { page, pageSize, tag, ...restParams } = useURLQuery();
  const parsedPage = page ? parseInt(page as string) : 1;
  const parsedPageSize = pageSize ? parseInt(pageSize as string) : 10;

  const pageCount = Math.ceil(articles.length / parsedPageSize);

  useEffect(() => {
    if (!page || !pageSize) {
      const newSeachParams = qs.stringify({ tag, ...restParams, page: 1, pageSize: 10 }, { addQueryPrefix: true });
      navigate(newSeachParams);
    }
  }, [page, pageSize]);

  const allTags = useMemo(() => {
    let tags: string[] = [];
    articles.forEach(article => {
      if (article.frontmatter.tags) {
        tags = [...tags, ...article.frontmatter.tags];
      }
    });

    return uniq(tags);
  }, [articles]);

  const currentPageArticles = useMemo(() => {
    return drop(articles, parsedPage - 1).slice(0, parsedPageSize);
  }, [articles, parsedPage, parsedPageSize]);

  const setPage = (newPage: number) => {
    const newSearchParams = qs.stringify({ tag, pageSize, ...restParams, page: newPage }, { addQueryPrefix: true });
    navigate(newSearchParams);
  };

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
                {allTags.map(tag => {
                  return (
                    <Link to={`/tags/${tag}`} key={tag} className={cx('filter-item')}>
                      {tag}
                    </Link>
                  );
                })}
              </ul>
            </section>
          </div>
          <div className={cx('slide-up')}>
            <section className={cx('blog-post-list')}>
              {currentPageArticles.map(article => {
                return <ArticleItem key={article.frontmatter.slug} article={article} />;
              })}
            </section>
          </div>
        </div>
      </div>
      <Pagination currentPage={parsedPage} pageCount={pageCount} setPage={setPage} />
    </>
  );
};

export default ArticleList;
