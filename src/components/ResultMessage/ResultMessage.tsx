interface ResultMessageProps {
  message: string;
  isError?: boolean;
}

function ResultMessage({ message, isError = false }: ResultMessageProps) {
  return (
    <p
      className={`result-message${isError ? " result-message_type_error" : ""}`}
      role={isError ? "alert" : "status"}
    >
      {message}
    </p>
  );
}

export default ResultMessage;
