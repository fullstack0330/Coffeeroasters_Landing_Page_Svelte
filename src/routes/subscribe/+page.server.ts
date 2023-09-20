import prisma from '$lib/prisma'

export async function load() {
  const questions = await prisma.question.findMany({
    include: { options: true }
  })

  return { questions }
}
