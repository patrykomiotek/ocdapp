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

  static getDerivedStateFromError(error: Error) {
    // this.setState({ hasError: true });
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      // log
      // this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <p>Oh no! Error <button onClick={() => this.setState({ hasError: false })}>Try again</button></p>;
    }

    return this.props.children;
  }
}