import { Box, SxProps, Theme, Link } from "@mui/material";

export const Header = () => {
  return (
    <Box className="Header" sx={sx}>
      ヘッダー
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header" : {
    width: "100%",
  },
};
