import { TaskBar, List } from "@react95/core";
import { Computer2 } from "@react95/icons";
import OutsideClicker from "../OutsideClicker/OutsideClicker";
import { useNavigate } from "react-router-dom";

const WinBar = () => {
  const navigate = useNavigate();

  return (
    <OutsideClicker
      onClickOutside={() => {
      }}
    >
      <TaskBar
        list={
          <List>
            <List.Item
              icon={<Computer2 variant="32x32_4" />}
              onClick={() => {
        navigate("/");

              }}
            >
              Restart
            </List.Item>
          </List>
        }
      />
    </OutsideClicker>
  );
};

export default WinBar;
