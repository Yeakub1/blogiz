import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";

const LatestBlog = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-accent my-5">
        Latest Blog
      </h1>
      <p className="text-center font-xl w-10/12 mx-auto ">
        A blog, short for weblog, is a frequently updated web page used for
        personal commentary or business content. Blogs are often interactive and
        include sections at the bottom of individual blog posts where readers
        can leave comments.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {blogs.slice(0,2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};
export default LatestBlog;
