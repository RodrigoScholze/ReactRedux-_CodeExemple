import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as CourceActions from '../../store/actions/cource'

const Sidebar = ({ modules, toggleLesson }) => (
<aside>
    {modules.map(module => (
        <div key={module.id}>
            <strong>{module.title}</strong>
            <ul>
                {module.lessons.map(lesson => (
                    <li key={lesson.id}>
                        {lesson.title}
                        <button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
                    </li>
                ))}
            </ul>
        </div>
    ))}
</aside>
);

const mapStateToProps = state => ({
    modules: state.cource.modules
});

const mapDispatchToProps = dispatch => bindActionCreators(CourceActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
