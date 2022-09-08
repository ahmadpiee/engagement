import React from "react";
import { Button } from "@chakra-ui/react";

interface ButtonProps {
  children?: any;
  onClick?: () => void;
}

const MenuItemsButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <Button onClick={onClick} mt={{ base: 5, md: 0 }} mr={6} display="block" size="xs" backgroundColor="transparent">
        {children}
      </Button>
    </>
  );
};

export default MenuItemsButton;
