import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Home, Auth } from "./pages";
import HeaderContainer from "container/Base/HeaderContainer";
import { UsersProvider } from "status/visibleContext";

function App() {
  return (
    <UsersProvider>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect path="/home" to="/" />
        <Route path="/auth" component={Auth} />
        <Route render={() => <h2>존재하지 않는 페이지 입니다.</h2>} />
      </Switch>
    </UsersProvider>
  );
}

export default App;
