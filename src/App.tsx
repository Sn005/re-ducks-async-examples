import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import { Authors } from "./containers/Authors";
import { AuthorDetail } from "./containers/AuthorDetail";

const App: FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Authors} />
      <Route path="/authors/:authorId" exact component={AuthorDetail} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
