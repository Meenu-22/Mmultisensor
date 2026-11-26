import React, { useMemo } from 'react'

// The deliverable is one standalone HTML file. This frame runs that exact file
// inside an iframe, so what you see here is what opens in a browser offline.
import html from '../shared/disaster-dashboard.html?raw'

type Props = Partial<typeof args>

export default function Dashboard(props: Props) {
  const { tab, theme } = { ...args, ...props }
  const doc = useMemo(
    () =>
      html.replace(
        '<!--BOOT-->',
        `<script>window.__BOOT__=${JSON.stringify({ tab, theme })};</script>`
      ),
    [tab, theme]
  )
  return (
    <iframe
      key={`${tab}-${theme}`}
      title="IoT Disaster Management System – simulation dashboard"
      srcDoc={doc}
      allow="serial; autoplay"
      className="block h-screen w-full border-0"
    />
  )
}

export const args = {
  tab: 'dashboard',
  theme: 'system',
}

export const argTypes = {
  tab: { control: 'radio', options: ['dashboard', 'log', 'about'] },
  theme: { control: 'radio', options: ['system', 'light', 'dark'] },
}
