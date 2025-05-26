import { getTags } from "@/lib/actions/tag.action";
import React from "react";

const Tags = async () => {
  const { success, data, error } = await getTags({
    page: 1,
    pageSize: 10,
    query: "react js",
  });
  const { tags } = data || {};
  console.log(tags);
  return <div>Tags</div>;
};

export default Tags;
