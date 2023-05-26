import dayjs from 'dayjs'
import Link from 'next/link'
import Image from 'next/image'
import ptBR from 'dayjs/locale/pt-br'
import { cookies } from 'next/headers'
import { ArrowRight } from 'lucide-react'

import { api } from '@/lib/api'
import { EmptyMemories } from '@/components/EmptyMemories'

dayjs.locale(ptBR)

interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createdAt: string
}

export default async function Home() {
  const isAutheticated = cookies().has('token')

  if (!isAutheticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="beforebg-gray-50 -ml-8 flex items-center gap-2 text-base text-gray-100 before:h-px before:w-5">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>
            <Image
              src={memory.coverUrl}
              alt=""
              width={592}
              height={280}
              className="aspect-video w-full rounded-lg object-cover"
            />
            <p className="text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>
            <Link
              href={`/memories/${memory.id}`}
              className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
            >
              Ler mais
            </Link>
            <ArrowRight className="h-4 w-4" />
          </div>
        )
      })}
    </div>
  )
}
