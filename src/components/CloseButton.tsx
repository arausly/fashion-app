import React from "react";
import { Box } from "./theme";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

interface CloseButtonProps {
  onPress: () => void;
}

const SIZE = 60;

const CloseButton: React.FC<CloseButtonProps> = ({ onPress }) => {
  return (
    <RectButton {...{ onPress }}>
      <Box flexDirection="row" justifyContent="center">
        <Box
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE }}
          backgroundColor="white"
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            name="x"
            size={35}
            color="#000"
            style={{ textAlign: "center" }}
          />
        </Box>
      </Box>
    </RectButton>
  );
};

export default CloseButton;
