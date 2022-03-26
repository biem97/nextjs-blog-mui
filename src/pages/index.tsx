import { GetStaticProps } from "next";

// Components
import PostItem from "../components/PostItem";

// @mui
import { Box, Divider, Typography } from "@mui/material";
import { getSortedPostsData } from "../lib/posts";

// Types
import { PostsData } from "../types";

interface HomeProps {
  allPostsData: PostsData;
}

const Home = ({ allPostsData }: HomeProps) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              pl: 2,
            }}
            color="secondary"
          >
            Latest Articles
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ mr: 2 }} color="secondary">
            Date
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mb: 2,
        }}
      >
        <Divider />
      </Box>
      {allPostsData.map(postData => (
        <PostItem key={postData.id} postData={postData} />
      ))}
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
