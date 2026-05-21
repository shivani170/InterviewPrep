const withLogging = (WrappedComponent) => {
  const Wrapped = (props) => {
    console.log("Logging data...");
    return <WrappedComponent {...props} />;
  };
  Wrapped.displayName = `withLogging(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return Wrapped;
};

export default withLogging;
