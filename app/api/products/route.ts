import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Prisma } from '@/lib/generated/prisma'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Récupérer les paramètres de filtre
    const category = searchParams.get('category')
    const maxPrice = searchParams.get('maxPrice')
    const caffeineLevel = searchParams.get('caffeine')
    const search = searchParams.get('search')
    const featured = searchParams.get('featured')
    
    // Construire la requête
    const where: Prisma.ProductWhereInput = {
      isActive: true,
    }
    
    if (category && category !== 'Tous') {
      where.category = category
    }
    
    if (maxPrice) {
      where.price = {
        lte: parseFloat(maxPrice)
      }
    }
    
    if (caffeineLevel) {
      where.caffeineLevel = caffeineLevel.toUpperCase() as any
    }
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ]
    }
    
    if (featured === 'true') {
      where.isFeatured = true
    }
    
    // Récupérer les produits avec leurs images
    const products = await prisma.product.findMany({
      where,
      include: {
        images: {
          orderBy: { order: 'asc' }
        },
        _count: {
          select: {
            reviews: true,
            orderItems: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
    
    // Calculer la note moyenne pour chaque produit
    const productsWithRating = await Promise.all(
      products.map(async (product) => {
        const reviews = await prisma.review.findMany({
          where: { productId: product.id },
          select: { rating: true }
        })
        
        const avgRating = reviews.length > 0
          ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
          : 0
        
        return {
          ...product,
          price: product.price.toNumber(), // Convertir Decimal en number
          avgRating,
          reviewCount: product._count.reviews,
          soldCount: product._count.orderItems
        }
      })
    )
    
    return NextResponse.json(productsWithRating)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}