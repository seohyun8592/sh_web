(function () {
  const bgArea = document.querySelector('.bg-area');

  const clock = document.querySelector('.date-area .clock');
  const loginArea = document.querySelector('.login-form');
  const contentsArea = document.querySelector(
    '.main-contents-wrap .contents-area .contents-box'
  );
  const clockDesc = document.querySelector(
    '.main-contents-wrap .contents-area .contents-box .desc'
  );

  const textInput = document.querySelectorAll('.text-area .form-area input');
  const loginInput = document.querySelector('.login-form input');

  const BG_LENGTH = 6;
  const HIDDEN_STRING = 'hidden';
  const USER_NAME_KEY = 'user-name';

  // 랜덤 숫자 추출하기
  function createRandomNumbers(max) {
    return Math.floor(Math.random() * max);
  }

  // 배경이미지 바꾸기
  function bgChageHandler() {
    setInterval(function () {
      const bgNum = createRandomNumbers(BG_LENGTH);

      bgArea.style.backgroundImage = `url('../momentum/img/bg_0${bgNum}.png')`;
    }, 5000);
  }

  // 로그인 하기
  function logInHandler() {
    loginArea.classList.add(HIDDEN_STRING);

    const logInValue = loginInput.value;

    localStorage.setItem(USER_NAME_KEY, logInValue);
    clockDesc.innerText = `hello, ${logInValue}!`;

    contentsArea.classList.remove(HIDDEN_STRING);
  }

  function checkUserFn() {
    const getValue = localStorage.getItem(USER_NAME_KEY);

    if (getValue === null) {
      loginInput.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
          logInHandler();
        }
      });
      loginInput.addEventListener('keypress', (e) => {
        e.keyCode === 13 ? logInHandler() : false;
      });
    } else {
      loginArea.classList.add(HIDDEN_STRING);
      contentsArea.classList.remove(HIDDEN_STRING);

      clockDesc.innerText = `hello, ${getValue}!`;
    }
  }

  // 시계 작동하기
  function toOperateWatch() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    bgChageHandler();
    checkUserFn();
    toOperateWatch();
    setInterval(toOperateWatch, 1000);
  });
})(window);
