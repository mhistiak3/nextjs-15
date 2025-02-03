
export default function Home() {
  return (
    <main>
     
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-purple-700 to-purple-500 text-white h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to MyWebsite</h1>
          <p className="text-xl mb-6">
            Discover amazing content, blogs, and more!
          </p>
          <a
            href="#about"
            className="bg-white text-purple-700 px-6 py-3 rounded-lg shadow hover:bg-purple-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>
    </main>
  );
}
