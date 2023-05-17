import { styled } from "@/styles/stitches.config";
import { Text } from "@/styles/Text";

export const AboutMeSection = styled("section", {
  display: "flex",
  background: "$grey1",
  padding: "$section 0",
  "@mobile": {
    padding: "$sectionMobile 0",
  },
});

export const AboutMeSectionContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  padding: "0 1rem",
  margin: "0 auto",
  width: "1200px",
  "@mobile": {
    width: "100%",
  },
});

export const AboutMeTitle = styled(Text, {
  alignItems: "start",
});

export const AboutMeText = styled(Text, {
  paddingBottom: "1rem",
});
