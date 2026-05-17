export const Button = ({ text, onClick, type = "button", variant = "primary" }) => {
  return (
    <button className={`btn btn_${variant}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
};
