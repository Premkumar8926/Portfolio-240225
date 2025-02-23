const Alert = ({ type, text }) => {
  return (
    <div className="fixed bottom-5 right-5 flex justify-center items-center z-50">
      <div
        className={`p-5 ${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } items-center text-white leading-none lg:rounded-full flex lg:inline-flex rounded-md`}
        role="alert"
        aria-live="assertive"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } uppercase px-2 py-1 text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
