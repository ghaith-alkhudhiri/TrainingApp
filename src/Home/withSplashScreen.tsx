import React from 'react';
import SplashScreen from './SplashScreen';

interface State {
  isLoading: boolean;
}

const withSplashScreen = (WrappedComponent: React.ComponentType) => {
  return class extends React.Component<{}, State> {
    private timer: NodeJS.Timeout | null = null;

    constructor(props: {}) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      this.timer = setTimeout(() => {
        this.setState({ isLoading: false });
      }, 3000);
    }

    componentWillUnmount() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }

    render() {
      if (this.state.isLoading) {
        return <SplashScreen />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withSplashScreen;