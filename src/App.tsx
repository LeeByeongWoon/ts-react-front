import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Home, Auth, NotFound } from "./pages";
import HeaderContainer from "container/Base/HeaderContainer";
import { UsersProvider } from "status/visibleContext";

// const HeaderSpace = styled.div`
// width: 1200px;
// height: 58px;
// `
function App() {
  return (
    <UsersProvider>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect path="/home" to="/" />
        <Route path="/auth" component={Auth} />
        <Route render={() => <NotFound>존재하지 않는 페이지 입니다.</NotFound>} />
      </Switch>
    </UsersProvider>
  );
}

export default App;
