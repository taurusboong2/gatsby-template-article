import React, { FC } from 'react';
import { Link } from 'gatsby';
import styles from './articleItem.module.scss';
import classnames from 'classnames/bind';
import { Article } from '../../types/articles';

const cx = classnames.bind(styles);

type Props = {
  key: string;
  article: Article;
};

const ArticleItem: FC<Props> = props => {
  const { article } = props;

  const thumbnail = article.frontmatter.thumbnail;
  return (
    <>
      <Link to={article.frontmatter.slug} className={cx('list-item')}>
        <div className={cx('item-wrap')}>
          <p className={cx('item-tag')}>
            {article.frontmatter.tags?.map(tag => {
              return <span key={tag}>{tag}</span>;
            })}
          </p>
          <div className={cx('item-title')}>{article.frontmatter.title}</div>
          <div className={cx('item-description')}>{article.frontmatter.description}</div>
          <div className={cx('item-explain')}>
            <div>{article.frontmatter.date}</div>
            <span className={cx('explain-bar')} />
            <div>by {article.frontmatter.writer}</div>
          </div>
        </div>
        {thumbnail && (
          <div className={cx('item-image')}>
            <img src={thumbnail.publicURL} alt={thumbnail.name} />
          </div>
        )}
      </Link>
    </>
  );
};

export default ArticleItem;
