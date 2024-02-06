import { FC } from "react";

type Props = {
  post: postsType
}


const Post:FC<Props> = ({post}) => {
  return (
    <>
    <div>
      {post.body}
    </div>
    <div>
      {post.title}
    </div>
    </>
  );
}
 
export default Post;