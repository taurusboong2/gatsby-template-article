import React, { FC, useMemo } from 'react';
import styles from './pagination.module.scss';
import classnames from 'classnames/bind';
import { range } from 'lodash';

type Props = {
  currentPage: number;
  setPage: (newPage: number) => void;
  pageCount: number;
};

const cx = classnames.bind(styles);

const Pagination: FC<Props> = props => {
  const { pageCount, currentPage, setPage } = props;

  const pageList: number[] = useMemo(() => {
    const pageCountArray = range(1, pageCount + 1);
    return pageCountArray;
  }, [pageCount]);
  return (
    <>
      <ul className={cx('pagination')}>
        {pageList.map(page => {
          return (
            <li key={page}>
              <span onClick={() => setPage(page)} className={cx('page', { selected: currentPage === page })}>
                {page}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Pagination;
