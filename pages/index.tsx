import * as React from 'react'
import Layout from '../components/Layout'
import FrontpageHero from '../components/FrontpageHero'
import BasicCard from '../components/BasicCard'

import { NextPage } from 'next';


/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { pageContentStyles, pageGridContainer } from '../utils/commonStyles'

import forgottenHero from '../assets/mods/forgotten/forgotten-hero.png';
import theAngelReturnsHero from '../assets/mods/tar/tar-bg.png';
import heroBg from "../assets/aliceos.jpg"
const IndexPage: NextPage = () => {
  return (
    <Layout title="Home">
      <FrontpageHero
        title="AliceOS Prospect Park. Now calling your name."
        subtitle="AliceOS Prospect Park is bringing new features and updates to the table. With a brand new Desktop and other smaller improvements, you'll fall in love with AliceOS all over again."
        callToActionText="Upgrade now"
        callToActionLink="/aliceos"
        backgroundImageLocation={ heroBg }
      />
      <div css={ pageContentStyles }>
        <div css={ pageGridContainer }>
            <BasicCard
              title="Forgotten. And deleted."
              cardDescription="The new chapters of Forgotten bring suspense, surprise, and horror to the table in a whole new way."
              color="#fafafa"
              image={ forgottenHero }
              link="/mods/forgotten"
              strictPadding
              noShadow={ true }/>
            <BasicCard
              title="Doki Doki: The Angel Returns"
              cardDescription="Will you capture her inky heart?"
              color="#fafafa"
              image={ theAngelReturnsHero }
              link="/mods/the-angel-returns"
              strictPadding
              noShadow={ true }/>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
