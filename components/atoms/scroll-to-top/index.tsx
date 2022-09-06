import * as React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import style from "@styles/ScrollToTop.module.css";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";

const ScrollToTop = () => {
  const { locale } = useRouter();
  const [showScroll, setShowScroll] = React.useState<Boolean>(false);

  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Button rightIcon={<FaArrowCircleUp />} bg="teal" onClick={scrollTop} position="fixed" className={style.scrollToTop} style={{ display: showScroll ? "flex" : "none" }} size="xs">
        {localize(locale, "goTop")}
      </Button>
    </>
  );
};

export default ScrollToTop;
