import {Component} from "react";
import React from "react";
import PropTypes from 'prop-types';

const id = Math.random().toString();

class ScriptTag extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        async: PropTypes.bool
    };

    componentDidMount() {
        const script = document.createElement("script");

        // TODO: fix this
        // @ts-ignore
        script.src = this.props.src;
        // @ts-ignore
        script.async = this.props.async || false;

        const target = document.getElementById(id);
        if (target !== null) {
            target.replaceWith(script)
        }
    }

    render() {
        return <div id={id}/>
    }
}

export default ScriptTag