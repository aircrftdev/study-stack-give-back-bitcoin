import { createFileRoute } from '@tanstack/react-router'
import { CommunityPage } from '../site'

export const Route = createFileRoute('/community')({
  component: CommunityPage,
})
