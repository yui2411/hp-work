// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { About } from "../modules/hp/About";
import { Company } from "../modules/hp/Company";
import { Footer } from "../modules/hp/Footer";
import { Header } from "../modules/hp/Header";
import { Mainvisual } from "../modules/hp/Mainvisual";
import { Service } from "../modules/hp/Service";


// サンプルページのメインの実装
export const HomePage = () => {
  return (
    <Box className="SamplePage" sx={sx}>
      <Header />
      <Mainvisual />
      <About />
      <Service />
      <Company />
      <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.SamplePage": {
    width: "100%",    
  }
};
