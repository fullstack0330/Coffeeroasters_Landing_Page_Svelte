import prisma from '$lib/prisma'

export async function load() {
  const [products, features] = await Promise.all([
    prisma.product.findMany({ include: { image: true } }),
    prisma.feature.findMany({ include: { image: true } })
  ])

  return { products, features }
}
