"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Brand Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-red-600 mb-4">Our Story</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Founded with the vision to bring high-quality and affordable fashion to everyone, 
              our store blends modern trends with timeless styles. We are passionate about 
              providing products that make you feel confident, stylish, and comfortable. 
            </p>
          </div>
          <div>
            <Image
              src="/team/team.png"
              alt="Our Team"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="bg-red-600 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p>
              To make fashion accessible, stylish, and sustainable for every individual, 
              without compromising on quality or affordability.
            </p>
          </div>
          <div className="bg-black text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p>
              To become the most trusted e-commerce destination for fashion and lifestyle, 
              inspiring confidence and creativity in our customers worldwide.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-red-600 mb-10">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Quality", desc: "We deliver only the best products with premium materials." },
              { title: "Affordability", desc: "Style should be accessible to everyone, everywhere." },
              { title: "Sustainability", desc: "We use eco-friendly practices to protect the planet." },
              { title: "Customer First", desc: "Your happiness and trust drive everything we do." },
            ].map((value, i) => (
              <div
                key={i}
                className="border-2 border-red-600 p-6 rounded-xl text-center shadow-md hover:shadow-xl transition"
              >
                <h4 className="text-xl font-semibold text-black mb-2">{value.title}</h4>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gray-100 p-10 rounded-xl grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-4xl font-bold text-red-600">10K+</h4>
            <p className="text-gray-700">Happy Customers</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-red-600">5,000+</h4>
            <p className="text-gray-700">Products Delivered</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-red-600">15+</h4>
            <p className="text-gray-700">Cities Served</p>
          </div>
        </div>

        {/* Call To Action */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Be Part of Our Journey
          </h3>
          <p className="text-gray-700 mb-6">
            Explore our collection and find the perfect style for you today.
          </p>
          <a
            href="/products"
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-black transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
