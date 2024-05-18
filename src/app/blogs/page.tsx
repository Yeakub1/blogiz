import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const Blogpage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <div className="my-12">
        <h1 className="text-4xl font-bold text-center text-accent ">
          All Blogs from blogiz
        </h1>
        <p className="text-center font-xl w-10/12 mx-auto text-xl mt-9">
          A blog, short for weblog, is a frequently updated web page used for
          personal commentary or business content. Blogs are often interactive
          and include sections at the bottom of individual blog posts where
          readers can leave comments.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};
export default Blogpage;
