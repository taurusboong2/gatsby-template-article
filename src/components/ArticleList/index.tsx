import React, { FC } from 'react';
import styles from './articleList.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const ArticleList: FC = () => {
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
              <a href="" className={cx('list-item')}>
                <div className={cx('item-wrap')}>
                  <p className={cx('item-tag')}>
                    <a href="">hash1</a>
                  </p>
                  <div className={cx('item-title')}>Where does it come from?</div>
                  <div className={cx('item-description')}>Where can I get some?</div>
                  <div className={cx('item-explain')}>
                    <div>2022년 8월 11일</div>
                    <span className={cx('explain-bar')} />
                    <div>by TauBoong</div>
                  </div>
                </div>
                <div className={cx('item-image')}>
                  <img src="https://picsum.photos/240/160" alt="item image" />
                </div>
              </a>
              <a href="" className={cx('list-item')}>
                <div className={cx('item-wrap')}>
                  <p className={cx('item-tag')}>
                    <a href="">hash1</a>
                  </p>
                  <div className={cx('item-title')}>Where does it come from?</div>
                  <div className={cx('item-description')}>Where can I get some?</div>
                  <div className={cx('item-explain')}>
                    <div>2022년 8월 11일</div>
                    <span className={cx('explain-bar')} />
                    <div>by TauBoong</div>
                  </div>
                </div>
                <div className={cx('item-image')}>
                  <img src="https://picsum.photos/240/160" alt="item image" />
                </div>
              </a>
              <a href="" className={cx('list-item')}>
                <div className={cx('item-wrap')}>
                  <p className={cx('item-tag')}>
                    <a href="">hash1</a>
                  </p>
                  <div className={cx('item-title')}>Where does it come from?</div>
                  <div className={cx('item-description')}>Where can I get some?</div>
                  <div className={cx('item-explain')}>
                    <div>2022년 8월 11일</div>
                    <span className={cx('explain-bar')} />
                    <div>by TauBoong</div>
                  </div>
                </div>
                <div className={cx('item-image')}>
                  <img src="https://picsum.photos/240/160" alt="item image" />
                </div>
              </a>
              <a href="" className={cx('list-item')}>
                <div className={cx('item-wrap')}>
                  <p className={cx('item-tag')}>
                    <a href="">hash1</a>
                  </p>
                  <div className={cx('item-title')}>Where does it come from?</div>
                  <div className={cx('item-description')}>Where can I get some?</div>
                  <div className={cx('item-explain')}>
                    <div>2022년 8월 11일</div>
                    <span className={cx('explain-bar')} />
                    <div>by TauBoong</div>
                  </div>
                </div>
                <div className={cx('item-image')}>
                  <img src="https://picsum.photos/240/160" alt="item image" />
                </div>
              </a>
              <a href="" className={cx('list-item')}>
                <div className={cx('item-wrap')}>
                  <p className={cx('item-tag')}>
                    <a href="">hash1</a>
                  </p>
                  <div className={cx('item-title')}>Where does it come from?</div>
                  <div className={cx('item-description')}>Where can I get some?</div>
                  <div className={cx('item-explain')}>
                    <div>2022년 8월 11일</div>
                    <span className={cx('explain-bar')} />
                    <div>by TauBoong</div>
                  </div>
                </div>
                <div className={cx('item-image')}>
                  <img src="https://picsum.photos/240/160" alt="item image" />
                </div>
              </a>
              <a href="" className={cx('list-item')}>
                <div className={cx('item-wrap')}>
                  <p className={cx('item-tag')}>
                    <a href="">hash1</a>
                  </p>
                  <div className={cx('item-title')}>Where does it come from?</div>
                  <div className={cx('item-description')}>Where can I get some?</div>
                  <div className={cx('item-explain')}>
                    <div>2022년 8월 11일</div>
                    <span className={cx('explain-bar')} />
                    <div>by TauBoong</div>
                  </div>
                </div>
                <div className={cx('item-image')}>
                  <img src="https://picsum.photos/240/160" alt="item image" />
                </div>
              </a>
              <a href="" className={cx('list-item')}>
                <div className={cx('item-wrap')}>
                  <p className={cx('item-tag')}>
                    <a href="">hash1</a>
                  </p>
                  <div className={cx('item-title')}>Where does it come from?</div>
                  <div className={cx('item-description')}>Where can I get some?</div>
                  <div className={cx('item-explain')}>
                    <div>2022년 8월 11일</div>
                    <span className={cx('explain-bar')} />
                    <div>by TauBoong</div>
                  </div>
                </div>
                <div className={cx('item-image')}>
                  <img src="https://picsum.photos/240/160" alt="item image" />
                </div>
              </a>
              <a href="" className={cx('list-item')}>
                <div className={cx('item-wrap')}>
                  <p className={cx('item-tag')}>
                    <a href="">hash1</a>
                  </p>
                  <div className={cx('item-title')}>Where does it come from?</div>
                  <div className={cx('item-description')}>Where can I get some?</div>
                  <div className={cx('item-explain')}>
                    <div>2022년 8월 11일</div>
                    <span className={cx('explain-bar')} />
                    <div>by TauBoong</div>
                  </div>
                </div>
                <div className={cx('item-image')}>
                  <img src="https://picsum.photos/240/160" alt="item image" />
                </div>
              </a>
              <a href="" className={cx('list-item')}>
                <div className={cx('item-wrap')}>
                  <p className={cx('item-tag')}>
                    <a href="">hash1</a>
                  </p>
                  <div className={cx('item-title')}>Where does it come from?</div>
                  <div className={cx('item-description')}>Where can I get some?</div>
                  <div className={cx('item-explain')}>
                    <div>2022년 8월 11일</div>
                    <span className={cx('explain-bar')} />
                    <div>by TauBoong</div>
                  </div>
                </div>
                <div className={cx('item-image')}>
                  <img src="https://picsum.photos/240/160" alt="item image" />
                </div>
              </a>
              <a href="" className={cx('list-item')}>
                <div className={cx('item-wrap')}>
                  <p className={cx('item-tag')}>
                    <a href="">hash1</a>
                  </p>
                  <div className={cx('item-title')}>Where does it come from?</div>
                  <div className={cx('item-description')}>Where can I get some?</div>
                  <div className={cx('item-explain')}>
                    <div>2022년 8월 11일</div>
                    <span className={cx('explain-bar')} />
                    <div>by TauBoong</div>
                  </div>
                </div>
                <div className={cx('item-image')}>
                  <img src="https://picsum.photos/240/160" alt="item image" />
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleList;
