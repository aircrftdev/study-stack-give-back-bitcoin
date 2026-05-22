import { createFileRoute } from '@tanstack/react-router'
import { NewsletterPage } from '../site'

export const Route = createFileRoute('/newsletter')({
  component: NewsletterPage,
})
