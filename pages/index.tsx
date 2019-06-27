import * as React from 'react'
import Layout from '../components/Layout'
import FrontpageHero from '../components/FrontpageHero'
import BasicCard from '../components/BasicCard'

import { NextPage } from 'next';


/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { pageContentStyles, pageGridContainer } from '../utils/commonStyles'

import heroBg from '../assets/mods/forgotten/forgotten-hero.png';
import theAngelReturnsHero from '../assets/mods/tar/tar-bg.png';
import aliceOSHero from "../assets/aliceos.png"
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
      <div css={ pageContentStyles }>
        <div css={ pageGridContainer }>
            <BasicCard
              title="Doki Doki: The Angel Returns"
              cardDescription="Will you capture her inky heart?"
              color="#fafafa"
              image={ theAngelReturnsHero }
              link="/mods/the-angel-returns"
              strictPadding
              noShadow={ true }/>
            <BasicCard
              title="AliceOS Tehnical Preview"
              cardDescription="Now with superpowers."
              color="#fafafa"
              image={ aliceOSHero }
              link="https://aliceos.app"
              strictPadding
              noShadow={ true }/>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
