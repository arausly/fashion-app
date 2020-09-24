import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Button } from "../../components";
import { Box, Text } from "../../components/theme";
import SocialLogin from "./SocialLogin";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer: React.FC<FooterProps> = ({ onPress, title, action }) => {
  return (
    <>
      <SocialLogin />
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginTop="l"
      >
        <BorderlessButton onPress={onPress}>
          <Text variant="button" color="white">
            <Text color="white">{title} </Text>
            <Text color="primary">{action}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
};

export default Footer;
