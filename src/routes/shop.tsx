import { createFileRoute } from '@tanstack/react-router'
import { ShopPage } from '../site'

export const Route = createFileRoute('/shop')({
  component: ShopPage,
})
