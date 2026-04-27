import Link from "next/link";
import { Gift, Users, Store, Globe, Heart } from "lucide-react";

const features = [
  {
    title: "Gift Cards",
    description: "Send digital gift cards instantly to your loved ones for any occasion.",
    points: ["Instant delivery via email", "Flexible amount selection", "No expiry date"],
    icon: Gift,
    link: "/gift-card",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    title: "Membership",
    description: "Unlock premium shopping experience with exclusive perks.",
    points: ["Exclusive discounts", "Early access to sales", "Faster delivery"],
    icon: Users,
    link: "/membership",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Become a Seller",
    description: "Start your business and reach thousands of customers easily.",
    points: ["Easy product listing", "Secure payment system", "Growth analytics"],
    icon: Store,
    link: "/seller",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "International Shopping",
    description: "Shop products from around the world without hassle.",
    points: ["Global product access", "Secure payments", "Reliable shipping"],
    icon: Globe,
    link: "/international",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Smart Wishlist",
    description: "Save, track, and manage your favorite products smartly.",
    points: ["Save unlimited items", "Price drop alerts", "Quick add to cart"],
    icon: Heart,
    link: "/wishlist",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

export default function FeaturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-yellow-600 tracking-wide uppercase mb-2">
          Why Choose Us
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Everything You Need in One Place
        </h1>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto">
          We’ve built e-bazar to be more than just a store. Discover powerful tools designed for your convenience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <Icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>

              <ul className="space-y-3 mb-8">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                    <span className="bg-gray-100 p-1 rounded-full mr-3 text-green-600">✓</span>
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={feature.link}
                className="block text-center w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
              >
                Learn More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}