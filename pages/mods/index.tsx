import * as React from 'react'
import Layout from '../../components/Layout'
import FrontpageHero from '../../components/FrontpageHero'
import SubNavbar from '../../components/Subnavbar'
import SubnavbarItem from '../../components/SubnavbarItem'

import { NextPage } from 'next';

import forgottenHero from '../../assets/mods/forgotten/forgotten-hero.png';
import theAngelReturnsLogo from '../../assets/mods/tar/tar-logo.png';
import forgottenLogo from '../../assets/mods/forgotten/forgotten-logo.png';

const ModsLandingPage: NextPage = () => {
  return (
    <Layout title="Mods">
      <SubNavbar>
        <SubnavbarItem name="The Angel Returns" icon={ theAngelReturnsLogo } linksTo="https://theangelreturns.aliceos.app"/>
        <SubnavbarItem name="Forgotten" icon={ forgottenLogo } linksTo="/mods/forgotten"/>
      </SubNavbar>
      <FrontpageHero
        title="Deleted. And forgotten."
        subtitle="The new chapters of Forgotten bring suspense, surprise, and horror to the table in a whole new way."
        callToActionText="Learn more"
        callToActionLink="/mods/forgotten"
        backgroundImageLocation={ forgottenHero }
      />
    </Layout>
  )
}

export default ModsLandingPage
