export const BulletSelection = ({data, handleSelect, isActive, className}) => {
  return (
    <div className={className}>
      {data.map((item, i) => {
        if (i === data.length - 1) {
          return <div className={isActive(i)} onClick={() => handleSelect(i)}></div>;
        } else {
          return (
            <>
              <div onClick={() => handleSelect(i)} className={isActive(i)}></div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </>
          );
        }
      })}
    </div>
  );
};

export default BulletSelection;
