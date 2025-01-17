import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Review Teknologi Terkini</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Kartu Preview Review */}
        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Review Smartphone Terbaru</h2>
          <p className="text-gray-600 mb-4">
            Temukan ulasan lengkap tentang smartphone terbaru dengan fitur canggih.
          </p>
          <Link href="/reviews" className="text-blue-500 hover:text-blue-700">
            Baca Selengkapnya →
          </Link>
        </div>

        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Tips Memilih Laptop</h2>
          <p className="text-gray-600 mb-4">
            Panduan lengkap memilih laptop sesuai kebutuhan dan budget Anda.
          </p>
          <Link href="/reviews" className="text-blue-500 hover:text-blue-700">
            Baca Selengkapnya →
          </Link>
        </div>

        <div className="border rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Aksesoris Gadget</h2>
          <p className="text-gray-600 mb-4">
            Rekomendasi aksesoris terbaik untuk melengkapi perangkat Anda.
          </p>
          <Link href="/reviews" className="text-blue-500 hover:text-blue-700">
            Baca Selengkapnya →
          </Link>
        </div>
      </div>
    </main>
  )
}
