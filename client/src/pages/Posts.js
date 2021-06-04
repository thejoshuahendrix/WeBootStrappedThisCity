import React from "react";
import ItemModal from "../components/ItemModal";
import PostList from "../components/PostList";
import { Container } from "reactstrap";

const Posts = () => {
  return (
    <div>
      <Container>
        <ItemModal />
        <PostList></PostList>
      </Container>
    </div>
  );
};

export default Posts;
