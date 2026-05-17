import { Button } from "../Button/Button";

export const Header = ({ openModal }) => {
  return (
    <header className="header container">
      <div className="header_left">
        <h1 className="header_logo">ApplyFlow</h1>
      </div>

      <div className="header_right">
        <Button variant="primary" text="Add new application" onClick={openModal} />
      </div>
    </header>
  );
};
