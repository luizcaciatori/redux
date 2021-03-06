import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as CourseActions from "../../store/actions/course";

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map(module => {
      return (
        <div key={module.id}>
          <strong>{module.title}</strong>;
          <ul>
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                {lesson.title}
                <button onClick={() => toggleLesson(module, lesson)}>
                  Selecione
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </aside>
);

const mapStateProps = state => ({
  modules: state.course.modules
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Sidebar);
