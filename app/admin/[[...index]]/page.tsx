'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import Head from 'next/head'

export default function StudioPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <NextStudio config={config} />
    </>
  )
} 