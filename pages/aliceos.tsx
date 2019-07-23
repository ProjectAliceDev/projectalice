import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const errorPageRootStyles = css({
  textAlign: "center",
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 128,
  paddingBottom: 128
})

const titleStyles = css({
  fontSize: '2.75em',
})

const calltoActionStyles = css({
  textDecoration: "none",
  fontSize: "1.25em",
  color: "rgb(255, 204, 0)",
  '&:hover': {
    color: "#ffdb64",
  }
})

const ErrorPage: NextPage = () => {
  return (
    <Layout title="AliceOS Prospect Park">
      <meta http-equiv="refresh" content="0; url=http://aliceos.app/prospect-park-preview/"/>
    </Layout>
  )
}

export default ErrorPage
