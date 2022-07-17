import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./components/blockContent";
import project from "./documents/project";
import blog from "./documents/blog";
import job from "./documents/job";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([project, blog, job, blockContent]),
});
