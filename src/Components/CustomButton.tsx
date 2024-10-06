interface CustomButtonProps {
  width: string;
  fontSize: string;
  textColor: string;
  backgroundColor: string;
  transparent?: boolean;
  height: string;
  label: string;
  border?: string;
  padding?: string;
  borderRadius: string;
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'; 
  top?: string;
  left?: string;
  transform?: string
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  width,
  fontSize,
  textColor,
  backgroundColor,
  transparent,
  height,
  label,
  border,
  padding,
  position,
  top,
  left,
  transform,
  borderRadius,
  onClick,
}) => {
  const buttonStyle: React.CSSProperties = {
    color: textColor || 'white',
    backgroundColor: backgroundColor || '#22c0b0',
    opacity: transparent ? 0.5 : 1,
    border: border || '1px solid #22c0b0',
    position: position || 'static',
    top: top,
    left: left,
    transform: transform,
    borderRadius: borderRadius,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };


  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={`customButton ${width} ${height} ${fontSize} ${padding}`}
    style={buttonStyle} 
    onClick={handleClick}>
        {label}
    </button>
  );
};

export default CustomButton;
