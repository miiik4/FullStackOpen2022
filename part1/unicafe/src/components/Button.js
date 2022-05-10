const Button = ({ label, state, setState }) => <button onClick={() => setState(state + 1)}>{label}</button>;

export default Button;
