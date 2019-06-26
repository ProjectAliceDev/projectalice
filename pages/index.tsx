import * as React from 'react'
import Layout from '../components/Layout'
import FrontpageHero from '../components/FrontpageHero'
import { NextPage } from 'next';

import heroBg from '../assets/mods/forgotten/forgotten-hero.png';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <FrontpageHero
        title="Deleted. And forgotten."
        subtitle="The new chapters of Forgotten bring suspense, surprise, and horror to the table in a whole new way."
        callToActionText="Learn more"
        callToActionLink="/mods/forgotten"
        backgroundImageLocation={ heroBg }
      />
    </Layout>
  )
}

export default IndexPage
