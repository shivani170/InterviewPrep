import withLogging from "./LoggerHOC";

const Data = ({ data }) => {
  return <div>DATA: {data}</div>;
};

export default withLogging(Data);
