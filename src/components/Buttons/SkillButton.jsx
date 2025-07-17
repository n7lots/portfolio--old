export default function SkillButton({ children, onClick, isActive }) {
    return (
      <button onClick={onClick} className={isActive ? 'skill-button active' : 'skill-button'}>
        {children}
      </button>
    );
  }
  