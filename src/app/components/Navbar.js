export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">TechReview</a>
        <div className="space-x-4">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/reviews" className="hover:text-blue-500">Reviews</a>
          <a href="/about" className="hover:text-blue-500">About</a>
          <a href="/contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  )
}
