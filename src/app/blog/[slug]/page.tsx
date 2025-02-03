import { notFound } from "next/navigation";

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
    const slug = (await params).slug;
    if (!slug) {
        notFound();
    }
  return <div>BlogDetails {slug}</div>;
};
export default BlogDetails;
