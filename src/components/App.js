import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
  return (
    <div id="main" style={{padding: "1.5rem"}}>
      <Router>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new"
          component={StreamCreate}
          exact
        />
        <Route path="/streams/edit"
          component={StreamEdit}
          exact
        />
        <Route path="/streams/delete"
          component={StreamDelete}
          exact
        />
        <Route path="/streams/show"
          component={StreamShow}
          exact
        />
      {/* <Route path="*"
        component={() => <h3>404: NOT FOUND</h3>}
      /> */}
    </Router>
    </div>
  );
}

export default App;