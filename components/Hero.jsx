import { Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { ArrowDownward } from "@mui/icons-material";

const Hero = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: `relative`,
        height: "100vh",
        width: `100vw`,
        overflow: `hidden`,
        zIndex: -100,
        mb: 15,
      }}
    >
      <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      <Grid
        container
        item
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h1"
          align="center"
          gutterBottom
          sx={{
            color: "secondary.main",
            fontWeight: 400,
            zIndex: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          component="p"
          variant="h3"
          align="center"
          color="common.white"
          sx={{
            mb: 10,
            zIndex: 1,
          }}
        >
          {subtitle}
        </Typography>
        <Typography component="p" variant="h6" color="secondary" gutterBottom>
          Scroll
        </Typography>
        <ArrowDownward fontSize="large" color="secondary" />
      </Grid>
    </Grid>
  );
};

export default Hero;
