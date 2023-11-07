import React, { ErrorInfo, ReactNode } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError (error: Error) {
    return { hasError: true };
  }

  // eslint-disable-next-line n/handle-callback-err
  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // logErrorToMyService(error, errorInfo);
    // console.log(error, errorInfo);
  }

  render () {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>
        <PageError />
      </h1>;
    }

    return children;
  }
}
