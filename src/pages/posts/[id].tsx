import Post from "@/components/Post";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";


export const getStaticPaths:GetStaticPaths = async () => {
  const { data } = await axios(`https://jsonplaceholder.typicode.com/posts`)
  const paths = data.map(({id}) => ({
    params: {id: id.toString()},
  }));

  return {
    paths,
    fallback: false,
  }
}


export const getStaticProps:GetStaticProps = async (context) => {
  const {id} = context.params;
	const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
	if(!data) { return { notFound: true} }
	return {props: {post: data}}
}

type Props = {
	post: postsType
}


const PagePost:FC<Props> = ({post}) => {
  console.log(post);
  return (
    <>
      <Post post={post}/>
    </>
  );
}
 
export default PagePost;