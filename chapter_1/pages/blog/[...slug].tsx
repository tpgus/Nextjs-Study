// 동적 경로가 몇 개가 되었든 한 번에 사용하는 컴포넌트
// /blog/2022/12/id
// /blog/2022
// /blog/2022/10
import { useRouter } from "next/router";
import React from "react";

const BlogPostPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Blog Post</h1>
    </div>
  );
};

export default BlogPostPage;
