---
slug: '/blog/my-fourth-post'
date: '2022-08-22'
title: 'What is Jest'
category: 'Jest'
tags:
  - 'Jest'
  - 'TDD'
  - 'TEST'
description: 'about Jest'
thumbnail: ./images/img4.jpeg
author: 'taurusboong2'
author_thumbnail: ./images/taurus.png
author_description: 'Hello I`m gonna be a FE developer'
---

# Jest는 무엇인가?

## Jest의 정의

단순함에 중점을 둔 자바스크립트 테스팅 프레임워크

1. FAST AND SAFE
2. CODE COVERAGE
3. EASY MOCKING
4. GREAT EXCEPTIONS

## Jest를 왜 사용하는가?

Jest를 통해서 테스트 코드가 올바른 동작을 하는지, 의도된 대로 기능을 하는지 체크할 수 있음
→ 보다 안정적으로 기능적으로 잘 구현된 코드를 작성할 수 있게됨

## Jest를 배우기에 앞서야할 선행 지식

- NPM
- 테스트 코드를 왜 쓰는지에 대한 배경 지식
- 테스트 코드의 필요성
- TDD(도 알면 좋을 것 같음)

## Jest의 장점

- **zero config** : 추가 설정이 필요없음. 그냥 npm으로 설치 후 script 실행어만 바꿔주면 알아서 테스팅을 해줌
- **독립적 :** 테스트의 성능을 최대화하기 위해 자체 프로세스에서 실행하여 병렬적으로 진행됨.
- 문서화가 잘되어 있으며, 초보자도 테스트 코드를 작성해서 테스팅을 하기에 좋음
- npm trends에서 살펴본 바, 테스트 라이브러리 중 가장 높은 인지도 보유

## Jest의 단점

- 다른 테스팅 라이브러리에 비해 속도가 느림
- 다른 라이브러리에 대해 단순한 기능, 작은 기능 위주의 테스팅을 할 때만 좋은 효율성.
  → 폭넓은 테스트를 하지 못함
- 오류가 났을 때 어떤 오류가 발생하였는지 알려주지 않고 매번 터미널의 스크롤을 올려서 어떤 오류가 발생하였는지 확인해야 하는 불편함
