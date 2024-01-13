# CHAT-GPT와 웹 서비스

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contact: minuk005@naver.com](https://img.shields.io/badge/Contact-minuk005@naver.com-important)](mailto:minuk005@naver.com)

해당 리포는 프로그래머스의 "AI서비스와 함께 누구나 만드는 웹 프로젝트! feat. ChatGPT"를 학습하며 배운 내용을 바탕으로 작성되었습니다.

# 준비물
- Visual Studio Code
- Chat GPT 3.5 (**free**)
- 기본 제공되는 베이스코드 [코드.zip](https://github.com/SAMEZ-0129/Web_Service_with.Chat-GPT/files/13863207/default.zip)

해당 베이스코드의 js코드를 작성하여 랜덤 이미지를 생성하는 사이트 제작.

# 구현하기
버튼을 클릭하면 이벤트가 발생한다. 사용자가 버튼 클릭 -> 이미지를 화면에 보여준다.

사용자가 버튼을 클릭하는 것을 감지해야 한다. 먼저 대상이 되는 요소(버튼)를 확인하고 해당 요소에 이벤트 리스너를 추가한다.

랜덤한 이미지를 불러오는 사이트: [해당 사이트](https://picsum.photos/)

해당 사이트에서는 랜덤한 숫자 값으로 이미지를 임의로 생성한다.
=> 숫자를 랜덤하게 생성해서 매번 다른 숫자를 쿼리로 넣어주면 매번 다른 이미지가 생성된다.

```javascript
const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const img = document.createElement('img');
    img.src = `https://picsum.photos/500?random=${randomNumber}`;
```

추가로 구현한 사항 (강의에 나온 추가 내용과는 일부 다름)
- 이미지 30개 생성 후 버튼 클릭 시 기존 이미지 제거, 새로운 이미지 30개 생성.
- 이미지 클릭 시 모달창으로 크게 보여줌. (버그 존재)
- 새로 이미지를 생성하고 싶을 때 팝업창 노출

# 배포하기
**Netlify**를 활용한 배포
가입/로그인 후 수동으로 배포하기 선택

![image](https://github.com/SAMEZ-0129/Web_Service_with.Chat-GPT/assets/81644075/c7782a48-151b-4f97-802b-a8a442870371)

작성한 코드가 들어있는 파일을 압축해서 드랍.
상단에 프로젝트명을 클릭하면 홈화면이 나옴, 해당 부분에 링크가 최종 배포된 링크.
