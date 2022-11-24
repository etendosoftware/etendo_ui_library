export const ViewEtendo = (props: any) => {
  return (
    <div style={{...props.style, ...{display: 'flex'}}}>{props.children}</div>
  );
};
