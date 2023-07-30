// Higher-Order Component
const withLogging = (WrappedComponent) => {
  // Define a new component
  class WithLogging extends React.Component {
    componentDidMount() {
      console.log('Component is mounted');
    }

    componentWillUnmount() {
      console.log('Component is unmounted');
    }

    render() {
      // Pass down all the props to the wrapped component
      return <WrappedComponent {...this.props} />;
    }
  }

  return WithLogging;
};

// Regular component
const MyComponent = (props) => {
  return <div>My Component</div>;
};

// Enhance MyComponent by wrapping it with withLogging
const EnhancedComponent = withLogging(MyComponent);

// Now use the EnhancedComponent wherever you need the logging behavior
