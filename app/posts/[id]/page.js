const PostPage = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-4xl font-bold text-blue-600">{post.title}</h1>
      <p className="mt-4 text-lg text-gray-700 leading-relaxed">{post.body}</p>
      <hr className="my-6 border-t-2 border-gray-200" />
    </div>
  );
};

export default PostPage;
