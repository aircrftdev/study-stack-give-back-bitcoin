import { createFileRoute } from '@tanstack/react-router'
import { MeditationsPage } from '../site'

export const Route = createFileRoute('/meditations')({
  component: MeditationsPage,
})
