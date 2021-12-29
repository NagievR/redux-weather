// import Notification from "./components/layouts/Notification/Notification";
import MainPage from "./pages/MainPage";

import React from 'react';
import Bar from "./components/tests/Bar";
import New from "./components/tests/New";

const Foo = (props) => {
  return (
    <div className='test'>
      IM FOO
      <br />
      {JSON.stringify(props, null, 2)}
    </div>
  );
}

const componentList = {
  foo: Foo,
  bar: Bar,
  new: New
};

const data = [
  {
    id: "1",
    component: "foo",
    props: {
      fooInfo: "I`m depend on 'foo' only",
      title: "I'm not bound to concrete component"
    }
  },
  {
    id: "2",
    component: "bar",
    props: {
      title: "I'm not bound to concrete component"
    }
  },
  {
    id: "3",
    component: "new",
    fooInfo: "I`m depend on 'new' only",
    props: {
      title: "I'm not bound to concrete component"
    }
  }
]

function App() {
  return (
    <>
      <h1>Redux Weather Simple test</h1>
      <MainPage />
      {/* <Notification /> */}

    

      {data.map(el => {
        const Component = componentList[el.component];
        return <Component key={el.id} {...el.props} />
      })}
    </>
  );
}

export default App;
