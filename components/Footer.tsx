import Link from "next/link";
import { FunctionComponent } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Footer: FunctionComponent = () => {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: "8em",
        padding: "8em 0",
      }}
    >
      <Image
        src={`/FooterBackground.webp`}
        alt={`footer`}
        fill
        priority
        style={{
          objectFit: "cover",
        }}
      />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          maxWidth: "300px",
          position: "relative",
          "> *": {
            padding: "1em 0",
          },
        }}
      >
        <Grid item xs>
          <Link href="/">
            <Typography variant="subtitle1">Home</Typography>
          </Link>
          <Link href="/about">
            <Typography variant="subtitle1">About</Typography>
          </Link>
          <Typography variant="subtitle1">Contact Us</Typography>
          <Typography variant="subtitle1">Term of Services</Typography>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ mr: "2em" }} />
        <Grid item xs>
          <Link href="/#trending" scroll={false}>
            <Typography variant="subtitle1">Trending</Typography>
          </Link>
          <Link href="/#popular" scroll={false}>
            <Typography variant="subtitle1">Popular</Typography>
          </Link>
          <Link href="/#discover" scroll={false}>
            <Typography variant="subtitle1">Discover</Typography>
          </Link>
          <Link href="/#upcoming" scroll={false}>
            <Typography variant="subtitle1">Upcoming</Typography>
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
