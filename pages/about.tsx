import * as React from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import BasicCard from '../components/BasicCard'


/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { breakpoints } from '../utils/breakpoints'
import { pageContentStyles, thinnerPageGridContainer } from '../utils/commonStyles'

import duskImage from '../assets/people/dusk.png';
import noeliaImage from '../assets/people/noe.png';



const AboutPage: React.FunctionComponent = () => (
  <Layout title="About">
    <PageHero
    	title="About Us"
    	subtitle="We make cool things."
    	showLink
    	linkText = "Contact Us"
    	linkPointsTo = "mailto:hello@aliceos.app"
	/>
	<div css={ pageContentStyles }>
		<div>
			<h1>Who are we?</h1>
			<p>
				Project Alice is a group of collaborators, artists, developers, and modders that makes open-source content. Since May 2018, we've been working hard on making frameworks for visual novel developers and great mods for Doki Doki Literature Club. And we always make our work open-source because we just 💚 the open-source community.
			</p>
		</div>
		<h1>Meet the team (or some of us)</h1>
		<div css={ thinnerPageGridContainer }>
            <BasicCard
              title="Marquis Kurt"
              cardDescription="Head developer and director. Email: marquis.kurt@aliceos.app"
              color="#fafafa"
              image="https://avatars1.githubusercontent.com/u/13445064?s=512&v=4"
              strictPadding
             />
            <BasicCard
              title="Kibo Hikari"
              cardDescription="Director and developer. Email: enra@aliceos.app"
              color="#fafafa"
              image="https://avatars0.githubusercontent.com/u/14976516?s=512&v=4"
              strictPadding
             />
            <BasicCard
              title="Dusk Ealain"
              cardDescription="Diplomat. Email: dusk.ealain@aliceos.app"
              image={ duskImage }
              color="#fafafa"
              strictPadding
            />
            <BasicCard
              title="Noelia Riveros"
              cardDescription="Artist. Email: noelia.riveros@aliceos.app"
              image={ noeliaImage }
              color="#fafafa"
              strictPadding
            />
		</div>
	</div>
  </Layout>
)

export default AboutPage
