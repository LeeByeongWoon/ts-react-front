import React from "react";
import AuthContent from "./AuthContent";
import InputWithLabel from "./InputWithLabel";
import AuthButton from "./AuthButton";
import { RightAlignedLink } from ".";

function Login() {
  const onClick = () => {
    console.log("login");
  };
  return (
    <AuthContent title="로그인">
      <InputWithLabel label="이메일" name="email" placeholder="이메일" />
      <InputWithLabel
        label="비밀번호"
        name="password"
        placeholder="비밀번호"
        type="password"
      />
      <AuthButton onClick={onClick}>로그인</AuthButton>
      <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
    </AuthContent>
  );
}

export default Login;
