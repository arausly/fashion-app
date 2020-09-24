import React from "react";

import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  onPress,
  ...props
}) => {
  return (
    <BorderlessButton {...{ onPress }}>
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};

export default RoundedIconButton;
