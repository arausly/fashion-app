import React from "react";
import { TouchableWithoutFeedback } from "react-native";
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
      <Box flex={1} alignItems="center" marginBottom="l">
        <Button onPress={onPress}>
          <Text variant="button" color="white">
            <Text>{title} </Text>
            <Text color="primary">{action}</Text>
          </Text>
        </Button>
      </Box>
    </>
  );
};

export default Footer;
