import { NextRequest, NextResponse } from 'next/server'

const signInURL = `http://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        /* request.url -> qual url original o usuário estavantentando acessar. Dessa forma se ele tentar acessar uma página, apos logar vai ser redirecionado pra ela e não para a home poe exemplo */
        'Set-Cookie': `redirectTo=${request.url}; Path=/; httpOnly; max-age=20`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/memories/:path*',
}
