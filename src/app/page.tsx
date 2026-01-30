import Link from "next/link";
import Image from "next/image";
import { vendors } from "@/data/vendors";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Padisquare - Multi-Vendor Marketplace",
  description: "Discover amazing vendors and products on Padisquare",
  openGraph: {
    title: "Padisquare - Multi-Vendor Marketplace",
    description: "Discover amazing vendors and products on Padisquare",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/Dark@2x.png"
                  alt="Padisquare logo"
                  width={180}
                  height={80}
                  priority
                  className="object-contain w-[100px] md:w-[140px] h-auto"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Padisquare
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 hidden md:block">
              Multi-Vendor Marketplace
            </p>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Padisquare
          </h2>
          <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore unique storefronts from amazing vendors. Find everything you
            need, from premium tea to cutting-edge tech and fitness gear.
          </p>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <Link
              key={vendor.id}
              href={`/site/${vendor.slug}`}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl transition-all duration-300 h-full flex flex-col bg-white dark:bg-gray-800">
                {/* Vendor Hero */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src={vendor.heroImage}
                    alt={vendor.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Vendor Info */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Logo */}
                  <div className="mb-4">
                    <div className="relative h-16 w-16">
                      <Image
                        src={vendor.logo}
                        alt={`${vendor.name} logo`}
                        fill
                        className="object-cover rounded-lg border-2 border-white"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:translate-x-1 transition-transform">
                    {vendor.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {vendor.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <span
                      className="inline-block px-4 py-2 rounded-full text-white font-semibold"
                      style={{ backgroundColor: vendor.brandColor }}
                    >
                      {vendor.products.length} Products
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔍",
                title: "Product Search",
                description:
                  "Find exactly what you're looking for with powerful search",
              },
              {
                icon: "📊",
                title: "Smart Sorting",
                description:
                  "Sort by price, newest items, or browse by category",
              },
              {
                icon: "📄",
                title: "Easy Navigation",
                description: "Seamless pagination for effortless browsing",
              },
              {
                icon: "🎨",
                title: "Beautiful Design",
                description: "Responsive UI optimized for all devices",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Padisquare</h4>
              <p className="text-gray-400 text-sm">
                Your go-to multi-vendor marketplace for quality products.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Vendors</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {vendors.map((vendor) => (
                  <li key={vendor.id}>
                    <Link
                      href={`/site/${vendor.slug}`}
                      className="hover:text-white transition-colors"
                    >
                      {vendor.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Padisquare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
