const Alert = ({ alert }) => {
  if (!alert) {
    return <></>;
  }

  return <div className={`alert ${alert.type}`}>{alert.message}</div>;
};

export default Alert;
