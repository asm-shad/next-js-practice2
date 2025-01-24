import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="mt-10 px-6 md:px-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to the Blog Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mt-4">
          Explore insightful articles and the latest updates from our blog.
        </p>
      </section>

      {/* Blog Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <Link href="/posts">
          <Button>Explore BlogPosts here</Button>
        </Link>
      </div>

      {/* Blog Highlights Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-center text-gray-200">
          Featured Blogs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Sample Blog Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/QnZMZmc/15.jpg"
              alt="Blog 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Tech Innovations
              </h3>
              <p className="text-gray-600 mt-2">
                Discover the latest in technology and how it’s shaping the
                future.
              </p>
              <Link href="/posts">
                <span className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                  Read More →
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/QnZMZmc/15.jpg"
              alt="Blog 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Business Insights
              </h3>
              <p className="text-gray-600 mt-2">
                Stay ahead in the business world with tips and strategies.
              </p>
              <Link href="/posts">
                <span className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                  Read More →
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/QnZMZmc/15.jpg"
              alt="Blog 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Lifestyle Trends
              </h3>
              <p className="text-gray-600 mt-2">
                Explore the latest lifestyle trends and self-improvement tips.
              </p>
              <Link href="/posts">
                <span className="inline-block mt-4 text-blue-600 font-medium hover:underline">
                  Read More →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-100">
          Want to Stay Updated?
        </h2>
        <p className="text-gray-200 mt-2">
          Subscribe to our newsletter and never miss an update.
        </p>
        <div className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
}
