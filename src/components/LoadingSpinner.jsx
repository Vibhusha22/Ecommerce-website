const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "3rem", height: "3rem", margin: "50px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
