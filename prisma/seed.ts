import { PrismaClient } from '@prisma/client'
import { products } from '../lib/products'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Début du seed de la base de données...')

  // Supprimer les données existantes
  await prisma.cartItem.deleteMany()
  await prisma.cart.deleteMany()
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.review.deleteMany()
  await prisma.favorite.deleteMany()
  await prisma.productImage.deleteMany()
  await prisma.product.deleteMany()
  await prisma.address.deleteMany()
  await prisma.user.deleteMany()

  console.log('🗑️  Données existantes supprimées')

  // Créer un utilisateur admin de test
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@orthea.ch',
      name: 'Admin Orthéa',
      password: '$2a$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret123
      role: 'ADMIN',
      emailVerified: new Date(),
    },
  })

  console.log('👤 Utilisateur admin créé')

  // Créer un utilisateur client de test
  const testUser = await prisma.user.create({
    data: {
      email: 'client@example.com',
      name: 'Client Test',
      password: '$2a$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret123
      role: 'USER',
      emailVerified: new Date(),
    },
  })

  console.log('👤 Utilisateur test créé')

  // Créer les produits
  for (const product of products) {
    const createdProduct = await prisma.product.create({
      data: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        longDescription: product.longDescription,
        price: product.price,
        stock: 100, // Stock par défaut
        sku: `SKU-${product.id.padStart(4, '0')}`,
        category: product.category,
        origin: product.origin,
        brewingTemp: product.brewingTemp,
        brewingTime: product.brewingTime,
        caffeineLevel: product.caffeineLevel.toUpperCase() as any,
        flavor: product.flavor,
        benefits: product.benefits,
        isActive: product.inStock,
        isFeatured: ['1', '2', '3'].includes(product.id), // Les 3 premiers sont featured
        images: {
          create: [
            {
              url: `/images/products/${product.slug}.jpg`,
              alt: product.name,
              order: 0,
            },
          ],
        },
      },
    })

    console.log(`🍵 Produit créé: ${createdProduct.name}`)
  }

  // Créer quelques favoris pour l'utilisateur test
  const productsInDb = await prisma.product.findMany({ take: 3 })
  for (const product of productsInDb) {
    await prisma.favorite.create({
      data: {
        userId: testUser.id,
        productId: product.id,
      },
    })
  }

  console.log('❤️  Favoris créés')

  // Créer une adresse pour l'utilisateur test
  await prisma.address.create({
    data: {
      userId: testUser.id,
      name: 'Adresse principale',
      addressLine1: 'Rue du Commerce 42',
      city: 'Genève',
      postalCode: '1201',
      country: 'CH',
      phone: '+41 22 123 45 67',
      isDefault: true,
    },
  })

  console.log('📍 Adresse créée')

  // Créer quelques avis
  const reviewProducts = await prisma.product.findMany({ take: 2 })
  for (const product of reviewProducts) {
    await prisma.review.create({
      data: {
        userId: testUser.id,
        productId: product.id,
        rating: 5,
        title: 'Excellent thé !',
        comment: 'Vraiment un thé d\'exception. Je recommande vivement.',
        verified: true,
      },
    })
  }

  console.log('⭐ Avis créés')

  // Créer une commande test
  const orderProducts = await prisma.product.findMany({ take: 2 })
  let subtotalAmount = 0
  
  const orderItemsData = orderProducts.map((product) => {
    const quantity = 2
    const price = Number(product.price)
    const total = price * quantity
    subtotalAmount += total
    
    return {
      productId: product.id,
      quantity,
      price,
      total,
    }
  })

  const shippingAmount = 0
  const taxAmount = 0
  const totalAmount = subtotalAmount + shippingAmount + taxAmount

  await prisma.order.create({
    data: {
      userId: testUser.id,
      customerEmail: testUser.email,
      customerName: testUser.name!,
      shippingAddress: {
        name: 'Client Test',
        addressLine1: 'Rue du Commerce 42',
        city: 'Genève',
        postalCode: '1201',
        country: 'CH',
      },
      items: {
        create: orderItemsData,
      },
      subtotal: subtotalAmount,
      shipping: shippingAmount,
      tax: taxAmount,
      total: totalAmount,
      paymentStatus: 'PAID',
      status: 'DELIVERED',
    },
  })

  console.log('📦 Commande test créée')

  // Inscrire quelques emails à la newsletter
  const newsletterEmails = [
    'newsletter1@example.com',
    'newsletter2@example.com',
    'newsletter3@example.com',
  ]

  for (const email of newsletterEmails) {
    await prisma.newsletter.create({
      data: { email },
    })
  }

  console.log('📧 Inscriptions newsletter créées')

  console.log('✅ Seed terminé avec succès !')
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })