import * as React from 'react'
import Layout from '../../components/Layout'
import FrontpageHero from '../../components/FrontpageHero'
import MiniNavbar from '../../components/MiniNavbar'
import BasicCard from '../../components/BasicCard'
import Link from 'next/link'
import { NextPage } from 'next';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import facepaint from 'facepaint';
import { breakpoints } from '../../utils/breakpoints'
import { pageContentStyles, pageGridContainer } from '../../utils/commonStyles'

import forgottenHero from '../../assets/mods/forgotten/forgotten-hero_alt.png';
import forgottenLogo from '../../assets/mods/forgotten/forgotten-logo.png';
import openSourceFeature from '../../assets/mods/forgotten/f1.png';
import chapterReleaseFeature from '../../assets/mods/forgotten/f2.png';
import charactersFeature from '../../assets/mods/forgotten/f3.png';
import developersFeature from '../../assets/mods/forgotten/f4.jpg';

const ForgottenPage: NextPage = () => {
  return (
    <Layout title="Forgotten">
      <MiniNavbar
        title="Forgotten"
        icon={ forgottenLogo }
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
        subtitle="Set after the events of Doki Doki Literature Club!, the Literature Club takes a horrific turn for the worst in Forgotten. Sayori takes on the challenges of leading the literature club while the other members deal with Monika's sudden disappearance and the arrival of Sayonika, a cheerful classmate with a passion and craft in programming. However, when strange things start happening around campus and the neighborhood, it's up to you, with the help of newly-arrived Alice Angel, to find out what's going on and where Monika disappeared to. Can you uncover the truth before it's too late?"
        callToActionText=""
        callToActionLink=""
        backgroundImageLocation={ forgottenHero }
        dontShowCallToAction
      />
      <div css={ pageContentStyles }>
        <div css={ pageGridContainer }>
          <BasicCard
            title="Characters from the community to fall in love with."
            cardDescription="Forgotten brings new characters that you already know and love to the table. The venerable Alice Angel from Bency and the Ink Machine and Sayonika from the Sayonika team join forces to help solve the mystery."
            color="#fafafa"
            noShadow={ true }
            image={ charactersFeature }
            strictPadding
            imageOnTop
            />
          <BasicCard
            title="Anticipate the next release. Continue the story."
            cardDescription="Forgotten updates are released on a chapter-by-chapter basis, letting players feel the experience and keep playing with every new update. And, since each release improves on previous chapters, players that want to start over will get to see new improvements."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image = { chapterReleaseFeature }
            />
          <BasicCard
            title="Completely open to everyone. Right down to the the source."
            cardDescription="Forgotten is free and open-source software, licensed under the GNU General Public License. Whether it's taking a look at how Forgotten is made or creating a new spinoff of the original story, the code is freely available on GitHub. We also allow contributions from the community to make Forgotten the best mod it can be, reviewing issues and pull requests regularly."
            color="#fafafa"
            noShadow={ true }
            image={ openSourceFeature }
            strictPadding
            imageOnTop
            />
          <BasicCard
            title="A mod developers will absolutely love(to: .death)."
            cardDescription="Developers will love tinkering around with Forgotten's code. Forgotten supports Sayonika's QuickStart scripts for Travis CI deployment and is one of the first projects to have Xcode support. Forgotten is also built on top of AliceOS, our robust and evolving framework for developing interactive visual novel experiences with operating system-like features such as notifications and setup assistants."
            color="#fafafa"
            image={ developersFeature }
            strictPadding
            noShadow={ true }/>
        </div>
        <br/>
        <small>
          Xcode is a trademark of Apple Inc., registered in the U.S. and other countries. Sayonika is a trademark of the Sayonika project.
        </small>
      </div>
    </Layout>
  )
}

export default ForgottenPage
