import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react'
import { getBlogPost, getRelatedPosts } from '@/lib/blog-posts'

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 2)

  return (
    <div className="min-h-screen bg-porcelain">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-jade overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-jade/90 to-jade"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-porcelain/80 hover:text-porcelain mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Retour au blog
            </Link>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-porcelain mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-porcelain/80">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 bg-jade/10 text-jade px-3 py-1 rounded-full text-sm">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="font-crimson text-ink/80 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  // Traiter les titres
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="font-playfair text-4xl text-ink mt-12 mb-6">
                        {paragraph.replace('# ', '')}
                      </h1>
                    )
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="font-playfair text-3xl text-ink mt-10 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="font-montserrat font-semibold text-xl text-ink mt-8 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  
                  // Traiter les listes
                  if (paragraph.includes('\n-')) {
                    const items = paragraph.split('\n-').filter(item => item.trim())
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                        {items.map((item, i) => (
                          <li key={i} className="text-ink/80">
                            {item.replace(/^[\s-]+/, '')}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  
                  // Traiter les listes numérotées
                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split(/\n\d+\./).filter(item => item.trim())
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 ml-4">
                        {items.map((item, i) => (
                          <li key={i} className="text-ink/80">
                            {item.trim()}
                          </li>
                        ))}
                      </ol>
                    )
                  }
                  
                  // Paragraphes normaux
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-ink/80 leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  }
                  
                  return null
                })}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-jade/5 rounded-xl">
              <h3 className="font-montserrat font-semibold text-lg text-ink mb-2">
                À propos de l'auteur
              </h3>
              <p className="text-ink/70">
                {post.author} est passionné par l'univers du thé et partage régulièrement 
                ses découvertes et connaissances sur le Journal du Thé d'Orthéa.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl text-ink mb-12 text-center">
              Articles Similaires
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <article className="bg-porcelain rounded-xl p-6 hover:shadow-lg transition-all group">
                    <span className="inline-block bg-jade/10 text-jade px-3 py-1 rounded-full text-sm mb-4">
                      {relatedPost.category}
                    </span>
                    
                    <h3 className="font-playfair text-xl text-ink mb-3 group-hover:text-jade transition-colors">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-ink/70 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-ink/60">
                      <span>{relatedPost.readTime}</span>
                      <span className="text-jade">Lire →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-jade/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl text-ink mb-4">
            Découvrez Nos Thés
          </h2>
          <p className="text-ink/70 mb-8 max-w-2xl mx-auto">
            Inspiré par cet article ? Explorez notre collection de thés soigneusement sélectionnés.
          </p>
          <Link href="/boutique" className="inline-block bg-jade hover:bg-jade/90 text-porcelain px-8 py-4 rounded-full font-montserrat font-medium transition-all hover:scale-105">
            Visiter la Boutique
          </Link>
        </div>
      </section>
    </div>
  )
} 