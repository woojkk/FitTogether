import React from "react";
import PostFilter from "../../components/Community/PostFilter";
// import { Link } from "react-router-dom";
import CreatePost from "../CommunitySub/CreatePost";
import Post from "../CommunitySub/Post";

interface Props {}

const Community: React.FC<Props> = () => {
  return (
    <div>
      <PostFilter />
      //추후 삭제
      <CreatePost />
      <Post />
    </div>
  );
};

export default Community;
