import * as React from 'react'
import Layout from '../components/Layout'
import FrontpageHero from '../components/FrontpageHero'
import { NextPage } from 'next';

import heroBg from '../assets/forgotten-hero.png';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <FrontpageHero
        title="Deleted. And forgotten."
        subtitle="The new chapters of Forgotten bring suspense, surprise, and horror to the table in a whole new way."
        callToActionText="Try the demo"
        callToActionLink="/mods/forgotten"
        backgroundImageLocation={ heroBg }
      />
    </Layout>
  )
}

export default IndexPage
