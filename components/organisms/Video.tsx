import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { localize } from "@utils/lib/formatter";
import { useRouter } from "next/router";

const Video: React.FC = () => {
  const { locale } = useRouter();

  return (
    <Container marginTop={{ base: "10" }} maxW="6xl" paddingTop={{ base: "7" }} paddingLeft={{ base: "7", md: "20", lg: "15" }} paddingRight={{ base: "7", md: "20", lg: "15" }} paddingBottom={{ base: "4", md: "10" }} id="video">
      <Heading as="h2">{localize(locale, "video")}</Heading>
      <video
        autoPlay
        loop
        src="https://jannahfirdaus-image-cloud.s3.ap-southeast-1.amazonaws.com/Mutiara%20%26%20Ahmad%20%281%29.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaDmFwLXNvdXRoZWFzdC0xIkcwRQIgM%2B%2Bk%2Bs%2FIStuVRq%2F%2Fdy2knDh3h9smjg%2FoJpKIdTTfM9wCIQCzdkjlLnta%2FarN2ifHlqavgUAbBx2wlEPopJOTGlvIPSrxAgjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDk0OTAxMzcwMzcxOCIMXb76mVPfv2l28%2FCJKsUCbCcpyuWHLYr5IJ4pt6LZkq5%2FcXCAQyqOWITJVztIfCMoHgLg3t8%2FO7R6XGVbXXrv5uz03IAtVJAhiPT4b48GUEbodHaexxbNms48a%2FdcnbIm04WOMnYtMrKs0gksBZExxWFa9lcSDLG1MM4nEpA8GDXT4F0GoNltg8IfHdL0DIRWQuicWw6vGem%2BbdKUBFgSfOjszMQ68Yn8GEO%2ByN%2Fzl4wzp%2B46QzaeV33fjKi%2B%2Bv9z9n4Xmk03gMo4dyTwXyJTXKtyAeFDRr9Rs4AzKrYF%2FJe1v5KzVFd5vJoUCDQPSwco7FkEGrxFttosWJRqNklGYQMTmKQDxa%2F%2FAdCZl42a%2BlbIaq4ns%2BQFyyf1a8gePjn2AVFgLQgFgtearx3XpI1HEjeBOFM4FH0qrUjobyco1%2F3St2jvpBGPrahglVITWBCajhjsMTD28NuYBjqzAuqtQ0M3m6vIQUJesbJ30Bn3yn3xTobQsl2k6LU%2FI%2BXVVf9nyMp58HX0YdlEkUrrug4df9LeuvpoWeMJcYcmgR7wsbXvrxZspVnMR3pvfMmT21eCJXWPlTjsYbx%2BOtT5114mOWegK886vJ1hEsnrE4j49tQHDqCHHhnCBz7Dfget9r5s9G02kmnxWy692t0ZhPG1tobL13DICWVre6P6HmuqAjNWG9UgUS8t44cT%2FDDLqhjCGlCJBugxEkYv46U9bBWVwe23R9sHPGG%2Fq0aSTXVN2l9oANHwgOm0YIvT4wBSTN7RQism9jv4OCvBu5Mc8VhOgHw1llOle3Y7URX9LDvm0sZgUeOmFFkbs%2BTTLpyyHtLFdg7K7GOGKi6h93aU%2BG3Z5cQ5bZD62O9PX6tJODV64Oc%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220906T135648Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5Z5M75QTMN4DRN6W%2F20220906%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=cfc29d1125b7ef8104b2179a7988c32b3922b66e4991445b3f886acfef776427"
        style={{
          height: "550px",
          width: "100%",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
        }}
      />
    </Container>
  );
};

export default Video;
