"use client"

import { useEffect } from "react"

export default function Favicon() {
  useEffect(() => {
    const baseSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <defs>
          <!-- Background gradient -->
          <radialGradient id="bg" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stop-color="#1e1b4b" />
            <stop offset="100%" stop-color="#0b0f19" />
          </radialGradient>

          <!-- Outer neon glow -->
          <radialGradient id="glow" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- Background -->
        <rect width="64" height="64" rx="14" fill="url(#bg)" />
        <rect width="64" height="64" rx="14" fill="url(#glow)" />

        <!-- Neon border -->
        <rect x="1" y="1" width="62" height="62" rx="13"
          stroke="#3b82f6" stroke-width="2.5" stroke-opacity="0.6"/>

        <!-- Code Icon < > -->
        <path d="M24 20 L16 32 L24 44 M40 20 L48 32 L40 44"
          stroke="#3b82f6"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          filter="url(#shadow)"/>

        <!-- Extra glow filter -->
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" flood-color="#3b82f6" flood-opacity="0.8"/>
        </filter>
      </svg>
    `

    const encode = (s: string) =>
      "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(s)))

    let link = document.querySelector("link[rel='icon']") as HTMLLinkElement | null
    if (!link) {
      link = document.createElement("link")
      link.rel = "icon"
      document.head.appendChild(link)
    }

    link.href = encode(baseSvg)
  }, [])

  return null
}
