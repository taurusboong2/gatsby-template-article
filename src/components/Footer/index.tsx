import React, { FC } from 'react';
import styles from './footer.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);
const Footer: FC = () => {
  return (
    <>
      <footer className={cx('footer')}>
        <div className={cx('footer-wrap')}>
          <h1 className={cx('footer-title')}>TaurusBoong</h1>
          <p className={cx('footer-info')}>
            © 2022 Jae-Boong Lee
            <br />
            깃허브: <a href="https://github.com/taurusboong2">https://github.com/taurusboong2</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
