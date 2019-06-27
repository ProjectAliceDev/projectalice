import * as React from 'react'
import Layout from '../../components/Layout'
import FrontpageHero from '../../components/FrontpageHero'
import SubNavbar from '../../components/Subnavbar'
import SubnavbarItem from '../../components/SubnavbarItem'
import BasicCard from '../../components/BasicCard'

import { NextPage } from 'next';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { pageContentStyles, pageGridContainer } from '../../utils/commonStyles'
import { breakpoints } from '../../utils/breakpoints'

import forgottenHero from '../../assets/mods/forgotten/forgotten-hero.png';
import theAngelReturnsLogo from '../../assets/mods/tar/tar-logo.png';
import forgottenLogo from '../../assets/mods/forgotten/forgotten-logo.png';
import theAngelReturnsHero from '../../assets/mods/tar/tar-bg.png';
import policiesHeroImage from '../../assets/policies.jpg';

const ModsLandingPage: NextPage = () => {
  return (
    <Layout title="Mods">
      <SubNavbar>
        <SubnavbarItem name="The Angel Returns" icon={ theAngelReturnsLogo } linksTo="/mods/the-angel-returns"/>
        <SubnavbarItem name="Forgotten" icon={ forgottenLogo } linksTo="/mods/forgotten"/>
      </SubNavbar>
      <FrontpageHero
        title="Deleted. And forgotten."
        subtitle="The new chapters of Forgotten bring suspense, surprise, and horror to the table in a whole new way."
        callToActionText="Learn more"
        callToActionLink="/mods/forgotten"
        backgroundImageLocation={ forgottenHero }
      />
      <div css={ pageContentStyles }>
        <div css={ pageGridContainer }>
          <BasicCard
              title="The Angel Returns. Now up to you."
              cardDescription="Our original open-source mod, The Angel Returns, is ready for the modding community to explore and build upon as an open-ended, never-ending mod."
              color="#fafafa"
              image={ theAngelReturnsHero }
              link="/mods/the-angel-returns"
              strictPadding
              noShadow={ true }/>
          <BasicCard
              title="We take our content policies seriously on every release."
              cardDescription="Learn more about the fan content policies that we strive to best abide by and how you can help us if there is a policy violation."
              color="#fafafa"
              image={ policiesHeroImage }
              link="/mods/policies"
              strictPadding
              noShadow={ true }/>
        </div>
      </div>
    </Layout>
  )
}

export default ModsLandingPage
