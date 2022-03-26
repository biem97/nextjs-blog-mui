import * as React from "react";

import { Favorite as FavoriteIcon } from "@mui/icons-material/";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import { PostData } from "../types";

interface PostProps {
  postData: PostData;
}

const Post = ({ postData }: PostProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        textAlign: "left",
      }}
    >
      <CardHeader title={postData.title} subheader={postData.date} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
