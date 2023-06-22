import { Box, SxProps, Theme } from "@mui/material";
import aboutimg from "../../resources/hp/about_illustration.png";

export const About = () => {
  return (
    <Box className="About" sx={sx}>
      <Box className="About-title-group" >
          <Box className="About-title"><span className="About-title-color">A</span>BOUT</Box>
          <Box className="About-title-sub">私たちについて</Box>
          </Box>
        <Box className="About-group" >
          <img className="About-img" src={aboutimg} alt="aboutimg" />
          <Box className="About-textgroup">
            <Box className="About-text" >副業人材を主体とした<span className="About-color">「 業務委託サービス」</span>です。<br className= "About-br" />
            通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担う<br className= "About-br" />
            フリーランスエンジニアが<span className="About-color">現在約100名</span>ほど所属しています。<br />
            <br />副業を主体としているため長時間の拘束稼働はできませんが、<br className= "About-br" />
            トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。<br className= "About-br" />
            クライアント側のチームメンバーと共同して開発を行うこともできるため、<br className= "About-br" />
            <span className="About-color">クライアント所属のエンジニアのスキルアップ</span>を行うことも可能です。</Box>
        </Box>
      </Box>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: "100%",
    background: "rgba(34, 161, 185, 0.1)",
  },

".About-title-group" : {
  textAlign: "center",
  fontWeight: "700",
},

".About-title" : {
  fontFamily: "Avenir Next",
  paddingTop: "66px",
  fontSize: {
    xs: "40px",
    md: "64px",
  },
  lineHeight: {
    xs: "55px",
    md: "87px",
  },
  letterSpacing: "0.18em",
},

".About-title-color" : {
  color: "rgba(34, 161, 185, 1)",
},

".About-title-sub" : {
  fontFamily: "Noto Sans",
  paddingBottom: "40px",
  fontSize: {
    xs: "14px",
    md: "16px",
  },
  lineHeight: {
    xs: "19px",
    md: "22px",
  },
  letterSpacing: "0.1em",
  color: "rgba(55, 54, 54, 1)",
},

".About-img" :{
    objectfit: "contain",
    width: "100%",
},

".About-textgroup" : {
  textAlign: "center",
  padding: "80px 0 70px",
  flexDirection: {
    md: "row",
    xs: "column",
  },
  width : {
    xs: "326px",
    md: "891px",
  },
  margin: "0 auto",
},

  ".About-text" : {
    fontFamily: "Noto Sans",
    fontSize : {
      md: "18px",
      xs: "16px",
    },
    lineHeight: "35px",
    fontWeight: "normal",
    textAlign: "center",
    color: "#000000",

  },

  ".About-br" : {
    display: {
      md: "block",
      xs: "none",
    },
  },

  ".About-color" : {
    color: "rgba(34, 161, 185, 1)",
    fontWeight: "bold",

  },
};
