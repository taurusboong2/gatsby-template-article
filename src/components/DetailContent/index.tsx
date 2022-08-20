import React, { FC } from 'react';
import styles from './detail.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const DetailContent: FC = () => {
  return (
    <>
      <div className={cx('post-wrap')}>
        <div className={cx('post-tag')}>JavaScript</div>
        <div className={cx('post-title')}>원시타입과 참조타입</div>
        <div className={cx('post-description')}>원시타입과 참조타입에 대해서 자세히 알아봅니다.</div>
        <div className={cx('post-explain')}>
          2022년 8월 12일&nbsp;
          <span />
          by TauBoong
        </div>
      </div>
      <div className={cx('post-content')}>
        <h1>
          <strong>원시타입은 불변성을 가진다.</strong>
        </h1>
        <p>
          원시 타입에는 string, number, boolean, null, undefined, symbol 이 있습니다. 원시 타입은 불변성을 가집니다.
        </p>
        <p>
          원시타입은 변수에 할당될 때, 메모리의 고정 크기로 원시 값을 저장하고 저장된 값은 변수가 직접적으로 가리키는
          형식입니다. 불변성은 값을 재할당 불가하다는 것이 아닌, 값을 재할당 했을 때 기존 값이 변하는 것처럼 보이더라도,
          실제로는 새로운 메모리 크기, 공간을 차지하는 메모리를 가리키는 것입니다.
        </p>
        <p>즉, 불변성이라는 의미는 기존에 매모리에 생성된 값들은 그 자체가 변경 될 수 없음을 의미합니다.</p>
        <hr />
      </div>
      <div className={cx('post-content')}>
        <h1>
          <strong>참조타입들은 어떨까?</strong>
        </h1>
        <p>배열, 객체, 함수가 대표적이며 원시타입과의 가장 큰 차이점은 변수의 크기가 동적을 변한다는 것입니다.</p>
        <p>
          이러한 특징 때문에 참조타입들은 별도의 메모리 공간인 메모리 힙에 저장되고, 변수에 할당 시에는 데이터에 대한
          주소가 변수에 할당되고, 자바스크립트 엔진은 할당된 주소를 통해 데이터에 접근합니다.
        </p>
        <p>
          때문에 참조 타입의 변수는 실제 데이터가 저장되는 것이 아닌, 실제 데이터가 저장된 주소를 참조 하기 때문에 참조
          타입이라고 불리우는 것입니다.
        </p>
        <hr />
      </div>
      <div className={cx('author-wrap')}>
        <div className={cx('post-author')}>
          <img className={cx('author-image')} src="https://picsum.photos/64/64" alt="author image" />
          <div className={cx('author-explain')}>
            <p className={cx('author')}>TauBoong</p>
            <p className={cx('description')}>발전하는 개발자 taurusboong2</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailContent;
