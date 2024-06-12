import { Post } from "@/app/_types/post";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";

type PostCardProps = {
  readonly post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Box
      sx={{
        width: "700px",
        border: "1px solid #b0c4de",
        padding: "14px",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src={post.user_info.icon_url as string} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box>
            <Typography
              variant="body1"
              fontWeight={700}
              fontSize={14}
              marginBottom="10px"
            >
              {post.user_info.name}
            </Typography>
            <Typography variant="body1">{post.message}</Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="caption">
              {post.created_at.toLocaleDateString("ja-JP")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
