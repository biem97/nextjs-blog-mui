import { Box, Grid, Link, Typography } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PostData } from "../types";
import Date from "./Date";

interface PostItemProps {
  postData: PostData;
}

const PostItem = ({ postData }: PostItemProps) => {
  return (
    <NextLink href={`/posts/${postData.id}`} passHref>
      <Link
        sx={theme => ({
          "&:hover": {
            backgroundColor: theme.palette.text.disabled,
            borderRadius: 2,
          },
          display: "flex",
          justifyContent: "space-between",
          py: 0.5,
          color: theme.palette.text.primary,
        })}
        underline="none"
      >
        <Typography
          component="span"
          sx={{
            paddingLeft: 2,
          }}
        >
          {postData.title}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            pr: 2,
            my: "auto",
          }}
        >
          <Date dateString={postData.date} />
        </Typography>
      </Link>
    </NextLink>
  );
};

export default PostItem;
