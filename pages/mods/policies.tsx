import * as React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import PageHero from '../../components/PageHero'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import facepaint from 'facepaint'

import policiesHeroImage from '../../assets/policies.jpg';

const breakpoints = facepaint([
	'@media(min-width: 420px)',
  	'@media(min-width: 768px)',
  	'@media(min-width: 1120px)'
])

const policiesPageContentStyles = css(breakpoints({
	paddingTop: 64,
	paddingBottom: 64,
	paddingLeft: [24, 48, 188],
	paddingRight: [24, 48, 188],
	'& a': {
		textDecoration: "none"
	}
}))

const PoliciesPage: React.FunctionComponent = () => (
  <Layout title="Mod Policies">
    <PageHero
    	title="Mod Policies"
    	subtitle="We take content policies. Seriously."
    	backgroundImage={ policiesHeroImage }
    	showLink
    	linkText = "Report a Concern"
    	linkPointsTo = "mailto:legal@aliceos.app"
	/>
    <div css={ policiesPageContentStyles }>
	    <p>
	    	Our mods for Doki Doki Literature Club typically combines the Doki universe and the Bendy and the Ink Machine universe together. Because we are making wonderful stories based off of these two popular video games, we strive to fully comply with two fan content policies. This page outlines important information regarding this topic.
	    </p>
	    <h2>Policies we comply with</h2>
	    <p>
	    	<ul>
	    		<li>Team Salvato’s IP Guidelines set the rules for Doki Doki Literature Club mods and assets. Without these quidelines, we wouldn’t have a mod for you.&nbsp;
	    		<Link href=""><a>Read the guidelines &rsaquo;</a></Link></li>
	    	</ul>
	    </p>
    </div>
  </Layout>
)

export default PoliciesPage
