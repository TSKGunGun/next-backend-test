import { Post } from "@/app/_types/post";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

type PostCardProps = {
  readonly post: Post
}

export default function PostCard( {post} : PostCardProps) {
  return (
    <Card variant="outlined" sx={{ width: "700px"}}>
      <CardContent>
        <Typography variant="body1">{post.message}</Typography>
        <Box sx={{ textAlign: "right"}}>
          <Typography variant="caption">{post.created_at.toLocaleDateString('ja-JP')}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}