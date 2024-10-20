export const DesktopIcon = ({ Icon, text, onClick }: any) => {
  return (
    <div className="desktop-icon" onClick={onClick}>
      <Icon variant="32x32_4" />

      <div className="desktop-icon-text">{text}</div>
    </div>
  );
};
