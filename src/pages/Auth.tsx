import React, { useEffect } from "react";
import { AuthWrapper, Login, Register } from "components/Auth";
import { useUsersSetVisible } from "status/visibleContext";
import { Route, Redirect, Switch } from "react-router-dom";

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
  return <AuthWrapper>
    <Switch>
      <Redirect path='/auth' exact to='/auth/login' />
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/register" component={Register} />
    </Switch>
  </AuthWrapper>;
}

export default Auth;
