import "./ErrorMessage.css";

export type ErrorMessageProps = {
  message: string;
  tip?: string;
};

export default function ErrorMessage({ message, tip }: ErrorMessageProps) {
  return (
    <section className="ErrorMessage">
      <p className="message">{message}</p>
      {tip && (
        <p>
          <span className="tip">Tips:</span> {tip}
        </p>
      )}
    </section>
  );
}
