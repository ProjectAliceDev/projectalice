import * as React from 'react'
import Layout from '../../components/Layout'
import FrontpageHero from '../../components/FrontpageHero'
import MiniNavbar from '../../components/MiniNavbar'
import BasicCard from '../../components/BasicCard'
import DeprecationFlag from '../../components/DeprecationFlag'
import Link from 'next/link'
import { NextPage } from 'next';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import facepaint from 'facepaint';
import { breakpoints } from '../../utils/breakpoints'
import { pageContentStyles, pageGridContainer } from '../../utils/commonStyles'


import tarHero from '../../assets/mods/tar/tar-bg.png';
import theAngelReturnsHero from '../../assets/mods/tar/tar-bg.png';
import tarLogo from '../../assets/mods/tar/tar-logo.png';
import storyFeature from '../../assets/mods/tar/f1.png';
import puzzlesFeature from '../../assets/mods/tar/f2.png';
import aliceOSFeature from '../../assets/mods/tar/f3.png';
import developersFeature from '../../assets/mods/tar/f4.jpg';

const AngelReturnsPage: NextPage = () => {
  return (
    <Layout title="The Angel Returns">
      <MiniNavbar
        title="The Angel Returns"
        icon={ tarLogo }
        buttonText="Download"
        buttonLink="https://github.com/ProjectAliceDev/the-angel-returns/releases/latest"
       >
         <Link href="/mods/policies">
           <a>Policies</a>
         </Link>
         <Link href="https://github.com/projectalicedev/the-angel-returns">
           <a>Source</a>
         </Link>
         <DeprecationFlag/>
       </MiniNavbar>
      <FrontpageHero
        title="The Angel is returning."
        subtitle="It's spring break! Join the Literature Club girls in an exciting one-week adventure as they visit Angelhaus Productions, the successor to Joey Drew Studios! Solve fun minipuzzles and have a good time with the girls. Of course, don't forget about the Angel! You wouldn't want her to [Just Alice.]"
        callToActionText=""
        callToActionLink=""
        backgroundImageLocation={ tarHero }
        dontShowCallToAction
      />
      <div css={ pageContentStyles }>
        <div css={ pageGridContainer }>
          <BasicCard
            title="Capture her inky heart."
            cardDescription="Doki Doki: The Angel Returns is an unofficial mod for the game Doki Doki Literature Club! that takes place after the events of the game and Bendy and the Ink Machine. This mod is the result of an experiment to bring a character from one game to another with a Character File Format converter (.chr) in hopes of answering the question: What happens if Alice Angel enters the Dokiverse?"
            color="#fafafa"
            noShadow={ true }
            image={ storyFeature }
            strictPadding
            />
          <BasicCard
            title="Unique puzzles to solve. Totally mind-blowing."
            cardDescription="The Angel Returns brings some new, intriguing puzzle minigames in between each day. However, these aren't standard puzzles. These puzzles challenge the brain and think outside of the box for some of the solutions. Some puzzles can include changing the game's settings or manipulating files in the player's Home directory to achieve an action."
            color="#fafafa"
            noShadow={ true }
            strictPadding
            image = { puzzlesFeature }
            imageOnTop
            />
          <BasicCard
            title="An experience you already know and love. Right from Setup."
            cardDescription="The Angel Returns is built on top of AliceOS, our robust and evolving framework for developing interactive visual novel experiences with operating system-like features such as notifications and setup assistants. AliceOS provides a new level of interactivity to the table, making you feel more immersed."
            color="#fafafa"
            noShadow={ true }
            image={ aliceOSFeature }
            strictPadding
            imageOnTop
            />
          <BasicCard
            title="Tested with Sayonika."
            cardDescription="As an open-source project, The Angel Returns is often involved with new projects and experiments to aid the visual novel developer communities, such as Sayonika, Doki Doki Mod Manager, and AliceOS. The Angel Returns has been extensively tested for Travis CI deployment, ensuring that your DDLC mods are deployed easily and quickly. We recommend checking out the Sayonika team and their work in making DDLC mods easier."
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

export default AngelReturnsPage
