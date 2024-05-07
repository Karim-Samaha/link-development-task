export const BulletSelection = (props) => {
  const SelectionWithBullets = ({i, item, data, handleSelect, isActive}) => {
    if (i === data.length - 1) {
      return (
        <div
          data-testid={`bullet-${i}`}
          key={`bullet-${item.id}`}
          className={isActive(i)}
          onClick={() => handleSelect(i)}></div>
      );
    }
    return (
      <>
        <div data-testid={`bullet-${i}`} onClick={() => handleSelect(i)} className={isActive(i)}></div>
        <span id="bullet-wrapper">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </>
    );
  };
  return (
    <div className={props.className}>
      {props.data.map((item, i) => {
        return <SelectionWithBullets key={`bullet-${item.id}`} item={item} i={i} {...props} />;
      })}
    </div>
  );
};

export default BulletSelection;
