import { Box, SxProps, Theme } from "@mui/material";
import { table } from "console";

export const Company = () => {
  return (
    <Box className="Company" sx={sx}>
      <Box className="Company-title-group">
        <Box className="Company-title">
          C<span className="Company-title-color">OMPANY</span>
        </Box>
        <Box className="Company-title-sub">会社概要</Box>
      </Box>
      <Box className="Company-text">
        <table className="Company-text-table">
          <tr>
            <td className="Company-text-category">会社名</td>
            <td className="Company-text-name">株式会社テクノスタンダード</td>
          </tr>
          <tr>
            <td className="Company-text-category">設立日</td>
            <td className="Company-text-name">2022年6月</td>
          </tr>
          <tr>
            <td className="Company-text-category">所在地</td>
            <td className="Company-text-name">
              東京都渋谷区渋谷3-10-15 YKビル7F
            </td>
          </tr>
          <tr>
            <td className="Company-text-category">資本金</td>
            <td className="Company-text-name">100万円</td>
          </tr>
          <tr>
            <td className="Company-text-category">代表取締役</td>
            <td className="Company-text-name">加藤拓也</td>
          </tr>
          <tr>
            <td className="Company-text-category">取引銀行</td>
            <td className="Company-text-name">
              三菱UFJ銀行
              <br />
              SBIネット銀行
            </td>
          </tr>
          <tr>
            <td className="Company-text-category-suppliers">取引先</td>
            <td className="Company-text-name-suppliers">
              株式会社バンタン
              <br />
              株式会社ジョブクラウン
              <br />
              株式会社メルメクス
              <br />
              マナルカ合同会社
            </td>
          </tr>
        </table>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Company": {
    width: "100%",
    backgroundColor: "rgba(34, 161, 185, 1)",
  },

  ".Company-title-group": {
    textAlign: "center",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  ".Company-title": {
    fontFamily: "Avenir Next",
    fontSize: {
      md: "68px",
      xs: "40px",
    },
    letterSpacing: {
      md: "10.2px",
      xs: "6px",
    },
  },

  ".Company-title-color": {
    color: "rgba(255, 255, 255, 0.6)",
  },

  ".Company-title-sub": {
    fontFamily: "Noto Sans",
    fontSize: {
      md: "16px",
      xs: "14px",
    },
    letterSpacing: {
      md: "1.6px",
      xs: "1.4px",
    },
  },

  ".Company-text": {
    color: "rgba(255, 255, 255, 1)",
  },

  ".Company-text-table": {
    padding: "74px 0 100px 0",
    borderBottom: "1px solid",
    marginLeft: {
      md: "310px",
      xs: "35px",
    },
    fontSize: {
      md: "20px",
      xs: "16px",
    },
  },

  ".Company-text-category": {
    fontWeight: "700",
    borderBottom: "1px solid",
    textAlign: "left",
    padding: "20px 0 20px 0",
    width: {
      md: "100px",
      xs: "80px",
    },
  },

  ".Company-text-name": {
    fontWeight: "normal",
    borderBottom: "1px solid",
    textAlign: "left",
    paddingLeft: {
      md: "87px",
      xs: "32px",
    },
    paddingRight: {
      md: "25px",
      xs: "5px",
    },
    width: {
      md: "649px",
      xs: "208px",
    },
  },

  ".Company-text-category-suppliers": {
    fontWeight: "700",
    textAlign: "left",
    verticalAlign: "top",
    padding: "20px 0 20px 0",
    width: {
      md: "100px",
      xs: "80px",
    },
  },

  ".Company-text-name-suppliers": {
    fontWeight: "normal",
    textAlign: "left",
    paddingLeft: {
      md: "87px",
      xs: "32px",
    },
    paddingRight: {
      md: "25px",
      xs: "5px",
    },
    width: {
      md: "649px",
      xs: "200px",
    },
  },
};
