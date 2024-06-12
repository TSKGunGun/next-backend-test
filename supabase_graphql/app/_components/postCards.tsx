import PostCard from "@/app/_components/postCard";
import { Post } from "@/app/_types/post";
import { Posts } from "@/app/_types/posts";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface PostCardsProps {
  readonly posts: Posts | undefined;
}

export default function PostCards(data: PostCardsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      <Typography variant="h5">みんなのポスト</Typography>
      {data.posts?.data.map((post: Post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </Box>
  );
}
