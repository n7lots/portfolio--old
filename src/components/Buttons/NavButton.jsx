export default function NavButton({ children, onClick, className }) {
    return (
      <button className={`nav-button ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }