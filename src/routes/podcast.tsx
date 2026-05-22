import { createFileRoute } from '@tanstack/react-router'
import { PodcastPage } from '../site'

export const Route = createFileRoute('/podcast')({
  component: PodcastPage,
})
