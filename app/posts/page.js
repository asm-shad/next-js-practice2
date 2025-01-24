import Link from "next/link";
const imageLinks = [
  "https://i.ibb.co.com/GkMHjGh/17.webp",
  "https://i.ibb.co.com/b34dZ9T/18.jpg",
  "https://i.ibb.co.com/dkzmGcx/1.jpg",
  "https://i.ibb.co.com/S0XGrnB/2.jpg",
  "https://i.ibb.co.com/Ybf3Dfw/3.jpg",
  "https://i.ibb.co.com/30Jzv8w/4.jpg",
  "https://i.ibb.co.com/jDdKPJ9/5.jpg",
  "https://i.ibb.co.com/KztvQHc/6.jpg",
  "https://i.ibb.co.com/6WP7mkF/7.jpg",
  "https://i.ibb.co.com/bz7tcR7/8.jpg",
  "https://i.ibb.co.com/R33KRMP/9.jpg",
  "https://i.ibb.co.com/xHRgSYP/10.jpg",
  "https://i.ibb.co.com/t3sMTbQ/11.jpg",
  "https://i.ibb.co.com/gmkW4xK/12.jpg",
  "https://i.ibb.co.com/xH6FhPc/13.jpg",
  "https://i.ibb.co.com/xYjk2WQ/14.jpg",
  "https://i.ibb.co.com/QnZMZmc/15.jpg",
  "https://i.ibb.co.com/QFqJVQW/16.jpg",
];

export default async function Blogs() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  console.log(posts);
  return (
    <div className="mt-6 max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Blog Posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={imageLinks[index % imageLinks.length]}
              alt={post.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {post.body.substring(0, 50)}...
              </p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Read More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
