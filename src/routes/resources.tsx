import { createFileRoute } from '@tanstack/react-router'
import { ResourcesPage } from '../site'

export const Route = createFileRoute('/resources')({
  component: ResourcesPage,
})
