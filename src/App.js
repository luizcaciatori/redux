import React from "react";
import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  state = {
    activeLesson: {}
  };
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
