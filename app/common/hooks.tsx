import { StatusError } from 'itty-router'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { type ZodType, z } from 'zod'
import { Text } from '@radix-ui/themes'

import { FontHachiMaruPop } from '@/app/common/fonts'

export const useMounted = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

export const useQueryData = <DataType extends ZodType>(endpoint: string, Data: DataType): [
  z.infer<DataType>, 'success',
] | [
  Error, 'error'
] | [
  null, 'loading',
] => {
  const { data, error, isSuccess, isError } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const response = await fetch(endpoint)
      if (!response.ok)
        throw new StatusError(response.status, await response.text())
      return Data.parse(await response.json())
    }
  })
  if (isError) return [error, 'error']
  if (!isSuccess) return [null, 'loading']
  return [data, 'success']
}
