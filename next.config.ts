import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const createNextInlt = createNextIntlPlugin()
const nextConfig: NextConfig = {
}

export default createNextInlt(nextConfig)
