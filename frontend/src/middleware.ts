import { auth } from '@/auth'
import { getUrl } from '@/lib/get-url'

export default auth(async (req) => {
  const isLoggedIn = !!req.auth
  const permissions = req.auth?.user?.permissions
  const pathname = req.nextUrl.pathname


  if (isLoggedIn && pathname === '/auth/sign-in') {
    if (permissions?.includes('admin')) {
      return Response.redirect(new URL(getUrl('/admin')))
    }

    return Response.redirect(new URL(getUrl('/')))
  }

  // 🔒 Proteção da rota admin
  if (!permissions?.includes('admin') && pathname.startsWith('/admin')) {
    return Response.redirect(new URL(getUrl('/auth/sign-in')))
  }
})
