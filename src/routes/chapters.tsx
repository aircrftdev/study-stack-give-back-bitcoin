import { createFileRoute } from '@tanstack/react-router'
import { ChaptersPage } from '../site'

export const Route = createFileRoute('/chapters')({
  component: ChaptersPage,
})
