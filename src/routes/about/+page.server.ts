import prisma from '$lib/prisma'

export async function load() {
  const headquarters = await prisma.headquarter.findMany({
    include: { image: true }
  })

  return { headquarters }
}
