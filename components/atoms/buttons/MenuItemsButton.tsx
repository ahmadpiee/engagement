import React from "react";
import { Button } from "@chakra-ui/react";

const MenuItemsButton = ({ children }) => {
  return (
    <>
      <Button mt={{ base: 5, md: 0 }} mr={6} display="block" size="xs" backgroundColor="transparent">
        {children}
      </Button>
    </>
  );
};

export default MenuItemsButton;
