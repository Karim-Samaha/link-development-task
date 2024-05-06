export const PrymaryButton = ({text, handleClick = () => null, styles = {}, className = ''}) => {
  const buttonStyles = {
    fontSize: '1.12rem',
    backgroundColor: '#f27914',
    border: 'none',
    color: '#fff',
    fontWeight: "500",
    minWidth: '170px',
    height: '60px',
    borderRadius: '10px',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    flexShrink: 0,
    ...styles,
  };
  return (
    <button style={buttonStyles} className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

export default PrymaryButton;
