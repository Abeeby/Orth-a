import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/blog-posts'

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-porcelain">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-jade overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-jade/90 to-jade"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl text-porcelain mb-4">
              Le Journal du Thé
            </h1>
            <p className="text-xl text-porcelain/90 max-w-2xl mx-auto">
              Découvrez l'univers fascinant du thé à travers nos articles, 
              guides et récits de voyage.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl text-ink mb-12 text-center">
            Article à la Une
          </h2>
          
          <Link href={`/blog/${featuredPost.slug}`}>
            <article className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] bg-jade/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-jade/20 to-gold/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-jade/50 text-6xl font-dancing">Orthéa</span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-ink/60 mb-4">
                    <span className="bg-jade/10 text-jade px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-3xl text-ink mb-4 group-hover:text-jade transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-ink/70 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-ink/60">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    
                    <span className="text-jade flex items-center gap-2 group-hover:gap-3 transition-all">
                      Lire l'article
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl text-ink mb-12 text-center">
            Articles Récents
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-porcelain rounded-xl overflow-hidden hover:shadow-lg transition-all group h-full flex flex-col">
                  <div className="aspect-[16/9] bg-jade/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-jade/20 to-gold/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-jade/30 text-4xl font-dancing">Orthéa</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-sm text-ink/60 mb-3">
                      <span className="bg-jade/10 text-jade px-2 py-0.5 rounded text-xs">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="font-playfair text-xl text-ink mb-3 group-hover:text-jade transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-ink/70 text-sm mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink/50">
                        {new Date(post.date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short'
                        })}
                      </span>
                      <span className="text-jade flex items-center gap-1 group-hover:gap-2 transition-all">
                        Lire
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-jade/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl text-ink mb-4">
            Restez Informé
          </h2>
          <p className="text-ink/70 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles, 
            conseils de dégustation et offres exclusives.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade/50 focus:border-jade"
            />
            <button 
              type="submit"
              className="bg-jade hover:bg-jade/90 text-porcelain px-6 py-3 rounded-lg font-montserrat font-medium transition-all"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  )
} 