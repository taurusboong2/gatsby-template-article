import React, { FC } from 'react';
import styles from './pagination.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);
const Pagination: FC = () => {
  return (
    <>
      <ul className={cx('pagination')}>
        <li>
          <a href="" className={cx('page', 'selected')}>
            1
          </a>
        </li>
        <li>
          <a href="" className={cx('page')}>
            2
          </a>
        </li>
        <li>
          <a href="" className={cx('page')}>
            3
          </a>
        </li>
        <li>
          <a href="" className={cx('page')}>
            4
          </a>
        </li>
        <li>
          <a href="" className={cx('page')}>
            5
          </a>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
