'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'

export function useNavigation() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const navigate = useCallback((path: string, options?: { state?: any; replace?: boolean }) => {
    if (options?.replace) {
      router.replace(path)
    } else {
      router.push(path)
    }
  }, [router])

  const goBack = useCallback(() => {
    router.back()
  }, [router])

  const location = {
    pathname,
    search: searchParams.toString(),
    state: null // Next.js doesn't support state in the same way
  }

  return {
    navigate,
    goBack,
    location,
    router,
    searchParams,
    pathname
  }
}