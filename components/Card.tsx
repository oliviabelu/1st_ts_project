import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import Link from "./Link";

const links = [
  { linkTitle: "GitHub", link: "https://github.com" },
  { linkTitle: "Frontend Mentor", link: "https://frontendmentor.com" },
  { linkTitle: "LinkedIn", link: "https://linkedin.com" },
  { linkTitle: "Twitter", link: "https://twitter.com" },
  { linkTitle: "Instagram", link: "https://instagram.com" },
];

const Card = () => {
  return (
    <Box
      className="cardBackground"
      sx={{
        padding: "2rem",
        borderRadius: "0.75rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src="/jellyfish.png"
        alt="profile image"
        height={88}
        width={88}
        style={{ borderRadius: "", marginBottom: "1.5rem" }}
      />
      <Typography
        variant="h1"
        sx={{ fontSize: "2.25rem", marginBottom: "0.25rem" }}
      >
        Mein Name
      </Typography>
      <Typography
        className="neon"
        variant="h2"
        sx={{ fontSize: "1.3125rem", fontWeight: 600, marginBottom: "1.5rem" }}
      >
        Stadt, Land
      </Typography>
      <Typography sx={{ fontSize: "1.3125rem", marginBottom: "1.5rem" }}>
        "Ich mache Dies & Das."
      </Typography>
      {links.map((link) => {
        return <Link linkData={link} key={link.link} />;
      })}
    </Box>
  );
};

export default Card;
