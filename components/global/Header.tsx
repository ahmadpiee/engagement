import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Box, Heading, Flex, Text, useColorMode, IconButton, Button, useDisclosure, Divider, Spacer, Kbd, Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { Link as LinkScroll } from "react-scroll";
import { BiMoon, BiSun } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";
import Image from "next/image";
import IdFlag from "@public/assets/images/id.svg";
import EnFlag from "@public/assets/images/en.svg";

const MenuItemsButton = dynamic(() => import("@components/atoms/buttons/MenuItemsButton"));

const Header: React.FC = (props) => {
  const { locale } = useRouter();
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex as="header" align="center" zIndex="10" padding="1.5rem" width="full" bg={colorMode === "light" ? "white" : "gray.800"} color={colorMode === "light" ? "black" : "white"} {...props}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="md">
            <Link href="/">{localize(locale, "leftMenu")}</Link>
          </Heading>
        </Flex>
        <Spacer />
        <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }}>
          <LinkScroll activeClass="active" to="intro" spy={true} smooth={true} duration={1000}>
            <MenuItemsButton>
              <Text fontSize="lg">{localize(locale, "intro")}</Text>
            </MenuItemsButton>
          </LinkScroll>
          <LinkScroll activeClass="active" to="gallery" spy={true} smooth={true} duration={1000}>
            <MenuItemsButton>
              <Text fontSize="lg">{localize(locale, "gallery")}</Text>
            </MenuItemsButton>
          </LinkScroll>
          <LinkScroll activeClass="active" to="video" spy={true} smooth={true} duration={1000}>
            <MenuItemsButton>
              <Text fontSize="lg">{localize(locale, "video")}</Text>
            </MenuItemsButton>
          </LinkScroll>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "flex" }} mt={{ base: 4, md: 0 }} alignContent="center">
          <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <BiMoon size={25} /> : <BiSun size={25} />} onClick={toggleColorMode} aria-label="button" />
        </Box>

        {/* mode */}
        <Box display={{ base: "block", md: "none", lg: "none" }}>
          <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <BiMoon size={25} /> : <BiSun size={25} />} onClick={toggleColorMode} aria-label="button" />
        </Box>

        {/* flag */}
        <Box style={{ marginLeft: 10 }}>
          {router.locale == "en" ? (
            <Link
              href={{
                pathname: router.pathname,
                query: { ...router.query },
              }}
              replace={true}
              locale="id"
            >
              <a>
                <IconButton size="xs" bg="transparent" aria-label="button">
                  <Image layout="fill" alt="Id Flag" src={IdFlag} />
                </IconButton>
              </a>
            </Link>
          ) : router.locale == "id" ? (
            <Link
              href={{
                pathname: router.pathname,
                query: { ...router.query },
              }}
              replace={true}
              locale="en"
            >
              <a>
                <IconButton size="xs" bg="transparent" aria-label="button">
                  <Image layout="fill" alt="Id Flag" src={EnFlag} />
                </IconButton>
              </a>
            </Link>
          ) : null}
        </Box>
        <Box style={{ marginLeft: 10 }} display={{ base: "block", md: "none", lg: "none" }}>
          <Button size="xs" bg="transparent" onClick={onOpen}>
            <GiHamburgerMenu size={18} />
          </Button>
        </Box>
      </Flex>

      {/* menu modal */}
      <Modal isCentered onClose={onClose} isOpen={isOpen} size="xs" motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Flex align="center" width="full" wrap="wrap">
              <LinkScroll activeClass="active" to="intro" spy={true} smooth={true} duration={1000}>
                <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" justifyContent="center">
                  <Text fontSize="xs" paddingX="1" fontWeight="bold">
                    {localize(locale, "intro")}
                  </Text>
                </Box>
              </LinkScroll>
              <Spacer />
              <Kbd marginRight="1">I</Kbd>
              <Divider />
              {/*  */}
              <LinkScroll activeClass="active" to="gallery" spy={true} smooth={true} duration={1000}>
                <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" justifyContent="center">
                  <Text fontSize="xs" paddingX="1" fontWeight="bold">
                    {localize(locale, "gallery")}
                  </Text>
                </Box>
              </LinkScroll>
              <Spacer />
              <Kbd marginRight="1">C</Kbd>
              <Divider />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
