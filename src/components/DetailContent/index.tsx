import React, { FC } from 'react';
import styles from './detail.module.scss';
import classnames from 'classnames/bind';
import { Article } from '@/types/articles';

const cx = classnames.bind(styles);

type Props = {
  article: Article;
};

const DetailContent: FC<Props> = props => {
  const { article } = props;

  const tags = article.frontmatter.tags;
  const thumbnail = article.frontmatter.thumbnail;

  return (
    <>
      <div className={cx('post-wrap')}>
        {tags && (
          <div className={cx('post-tag')}>
            {tags.map(tag => {
              return <span key={tag}>{tag}</span>;
            })}
          </div>
        )}
        <div className={cx('post-title')}>{article.frontmatter.title}</div>
        <div className={cx('post-description')}>{article.frontmatter.description}</div>
        <div className={cx('post-explain')}>
          {article.frontmatter.date}
          <span />
          by {article.frontmatter.author}
        </div>
      </div>
      <div className={cx('author-wrap')}>
        <div className={cx('post-author')}>
          {thumbnail && <img className={cx('author-image')} src={thumbnail.publicURL} alt={thumbnail.name} />}
          <div className={cx('author-explain')}>
            <p className={cx('author')}>{article.frontmatter.author}</p>
            <p className={cx('description')}>{article.frontmatter.author_description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailContent;
