import { createFileRoute } from '@tanstack/react-router'
import { BlogPage } from '../site'

export const Route = createFileRoute('/blog')({
  component: BlogPage,
})
