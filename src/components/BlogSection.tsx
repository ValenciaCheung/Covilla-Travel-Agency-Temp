"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

export function BlogSection() {
  const featuredPost = {
    id: "featured",
    title: "What Will Website Be Like In 100 Years?",
    excerpt:
      "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique.",
    date: "APRIL 19, 2021",
    image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Majestic%20waterfall%20cascading%20down%20rocky%20cliffs%20surrounded%20by%20lush%20green%20forest%2C%20misty%20spray%20and%20natural%20beauty&image_size=landscape_4_3",
  };

  const popularPosts: BlogPost[] = [
    {
      id: "misconceptions",
      title: "14 Common Misconceptions About Web Design",
      excerpt: "",
      date: "APRIL 19, 2021",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Spectacular%20tropical%20waterfall%20with%20crystal%20clear%20water%20falling%20into%20turquoise%20pool%2C%20surrounded%20by%20tropical%20vegetation&image_size=square",
    },
    {
      id: "principles",
      title: "5 Principles Of Effective Web Design",
      excerpt: "",
      date: "APRIL 19, 2021",
      image: "https://ext.same-assets.com/1081758887/1876638433.jpeg",
    },
    {
      id: "blogs",
      title: "10 Web Design Blogs You Can't Miss",
      excerpt: "",
      date: "APRIL 19, 2021",
      image: "https://ext.same-assets.com/1081758887/2732707531.jpeg",
    },
    {
      id: "designers",
      title: "Designers Who Changed the Web",
      excerpt: "",
      date: "APRIL 19, 2021",
      image: "https://ext.same-assets.com/1081758887/1756908556.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Featured Article */}
          <div>
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-3 block">
                  {featuredPost.date}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Button variant="outline" className="rounded-none">
                  READ MORE
                </Button>
              </div>
            </Card>
          </div>

          {/* Popular Posts */}
          <div>
            <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-8 block">
              POPULAR POSTS
            </span>
            <div className="space-y-6">
              {popularPosts.map((post) => (
                <div key={post.id} className="flex gap-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 font-medium tracking-wider uppercase block mb-2">
                      {post.date}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
