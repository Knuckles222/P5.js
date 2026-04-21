let password;

// let과 다른 const: 정의하는 순간 그 값을 바꿀 수 없다.
const correctPassword = "1234";

do {
  password = prompt("비밀번호를 입력하세요:");
} while (password !== correctPassword);

console.log("로그인 성공!");