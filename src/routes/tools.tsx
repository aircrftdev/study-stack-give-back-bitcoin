import { createFileRoute } from '@tanstack/react-router'
import { ToolsPage } from '../site'

export const Route = createFileRoute('/tools')({
  component: ToolsPage,
})
