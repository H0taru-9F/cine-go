import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        if (typeof this.props.onError === "function") {
            this.props.onError(error, errorInfo);
        }
    }

    render() {
        const { fallback, children } = this.props;
        const { error } = this.state;

        if (error) {
            return typeof fallback === "function" ? fallback(error) : fallback || null;
        }

        return children;
    }
}
