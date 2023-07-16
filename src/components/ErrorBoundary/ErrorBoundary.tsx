import { ReactNode, Component, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {

  state = {
    hasError: false,
  }

  static getDerivedStateFromError(_error: Error) {
    // this.setState({ hasError: true });
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // log to external service
    // this.setState({ hasError: true })
    console.error({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <p>Oh no! Error <button onClick={() => this.setState({ hasError: false })}>Try again</button></p>;
    }

    return this.props.children;
  }
}