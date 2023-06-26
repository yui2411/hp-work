import { Box, SxProps, Theme } from "@mui/material";
import mainimg from "../../resources/hp/mainvisual_backgraound.png";

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>

      <Box className="Main-img">
        <Box className="Catch-copy-group">
          <Box className="Catch-copy">安心<span className="Catch-copy-small">と</span>信頼<br className="catch-br" />
          <span className="Catch-copy-mostsmall">×</span><br className="none-br" />高度<span className="Catch-copy-small">な</span><br className="catch-br" />技術力</Box>
          <Box className="Catch-copy-sub">高品質な開発を標準に。</Box></Box>
        </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
    
  },

  ".Main-img" : {
    backgroundImage: `url(${mainimg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: {
      md: "700px",
      xs: "550px",
    },
    
  },

  ".Catch-copy-group" : {
    fontWeight: "700",
    fontFamily: "Noto Sans JP",
    paddingTop: {
      md: "277px",
      xs: "141px",
    },
    paddingBottom: {
      md: "170px",
      xs: "154px",
    },
    color: "rgba(255, 255, 255, 1)",
    textAlign: "left",
    textDecoration: "underline white",
    textDecorationThickness: "1px",
    textUnderlineOffset: "5px",
  },

  ".Catch-copy" : {
    fontSize : {
      md: "96px",
      xs: "57px",
    },
    lineHeight: {
      md: "139px",
      xs: "83px",
    },
    marginLeft: {
      md: "100px",
      xs: "19px",
    },
    paddingBottom: "12px",
  },

  ".Catch-copy-small" : {
    fontSize : {
      md: "64px",
      xs: "38px",
    },
    lineHeight: {
      md: "93px",
      xs: "55px",
    },
    padding: "0 9px 0 9px",
    
  },

  ".Catch-copy-mostsmall" : {
    padding: "0 0 0 22px",
    fontSize : {
      md: "96px",
      xs: "57px",
    },
    textDecoration: "underline white",
    textDecorationThickness: "1px",
    textUnderlineOffset: "5px",
    display: {
      md: "inline",
      xs: "none",
    }
  },

  ".Catch-copy-sub" : {
    fontSize : {
      md: "48px",
      xs: "24px",
    },
    //paddingBottom: "92px",
    fontWeight: "500",
    display: "inline-block",
    marginLeft: {
      md: "100px",
      xs: "19px",
    },
  },


  ".catch-br" : {
    display: {
      xs: "block",
      md: "none",
    },
  },

  ".none-br" : {
    display: {
      xs: "none",
      md: "block",
    },
  },

};
