export const r2 = async (r2: R2Bucket, key: string) => {
    const item = await r2.get(key)
    if (item === null) {
        return
    }
    const headers = new Headers()
    item.writeHttpMetadata(headers)
    return new Response(item.body, { headers })
}
