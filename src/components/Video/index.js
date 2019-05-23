import React from "react";
import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <h1>
    {activeModule.title} - {activeLesson.title}
  </h1>
);

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
}))(Video);
