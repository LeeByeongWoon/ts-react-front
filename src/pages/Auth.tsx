import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { Login } from "components/Auth";
import { useUsersSetVisible } from "status/visibleContext";

function Auth() {
  const change = useUsersSetVisible();
  // component mount 시 visible-false로 header를 숨김
  useEffect(() => {
    change(false);
    // clean-up 함수 실행으로 컴포넌트를 벗어날 시 visible-true 로 변경
    return () => {
      change(true);
    };
  }, [change])
  // Sub-Route
  return <Route path="/auth/login" component={Login} />;
}

export default Auth;
