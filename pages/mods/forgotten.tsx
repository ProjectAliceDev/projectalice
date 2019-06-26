import * as React from 'react'
import Layout from '../../components/Layout'
import FrontpageHero from '../../components/FrontpageHero'
import MiniNavbar from '../../components/MiniNavbar'
import Link from 'next/link'


import { NextPage } from 'next';

import forgottenHero from '../../assets/mods/forgotten/forgotten-hero.png';
import theAngelReturnsHero from '../../assets/mods/tar/tar-bg.png';
import theAngelReturnsLogo from '../../assets/mods/tar/tar-logo.png';
import forgottenLogo from '../../assets/mods/forgotten/forgotten-logo.png';

const ForgottenPage: NextPage = () => {
  return (
    <Layout title="Forgotten">
      <MiniNavbar
        title="Forgotten"
        buttonText="Try demo"
        buttonLink="https://github.com/ProjectAliceDev/stein/releases/latest"
       >
         <Link href="/mods/policies">
           <a>Policies</a>
         </Link>
         <Link href="https://github.com/projectalicedev/stein">
           <a>Source</a>
         </Link>
       </MiniNavbar>
      <FrontpageHero
        title="Don't forget what happened."
        subtitle="Set after the events of Doki Doki Literature Club!, the Literature Club takes a horrific turn for the worst in Forgotten. Find out what happened to Monika before it's too late."
        callToActionText=""
        callToActionLink=""
        backgroundImageLocation={ forgottenHero }
        dontShowCallToAction
      />
    </Layout>
  )
}

export default ForgottenPage
