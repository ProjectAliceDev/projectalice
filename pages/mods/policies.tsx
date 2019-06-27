import * as React from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import PageHero from '../../components/PageHero'
import BasicCard from '../../components/BasicCard'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import facepaint from 'facepaint'
import { breakpoints } from '../../utils/breakpoints'

import policiesHeroImage from '../../assets/policies.jpg';
import teamSalvatoLogo from '../../assets/policy-logos/ts-logo.png';
import jdsLogo from '../../assets/policy-logos/jds-logo.png';
import ddmcLogo from '../../assets/policy-logos/ddmc-logo.png';

const policiesPageContentStyles = css(breakpoints({
	paddingTop: 64,
	paddingBottom: 64,
	paddingLeft: [24, 48, 188],
	paddingRight: [24, 48, 188],
	'& a': {
		textDecoration: "none",
		color: "#ffcc22"
	},
	'& a:hover': {
		color: "#ffdb64"
	}
}))

const policiesGridContainer = css(breakpoints({
	display: "grid",
	gridTemplateColumns: ["1fr", "1fr", "repeat(3, 1fr)"],
	gridAutoRows: "1fr",
	gridColumnGap: 24,
	gridRowGap: 64,
	width: "100%",
	height: "100%",
	paddingBottom: 64,

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
	    <h1>Policies we comply with</h1>
	    <div id="pa-policies-grid" css={ policiesGridContainer }>
	    	<BasicCard
	    		title="Team Salvato"
	    		cardDescription="Team Salvato’s IP Guidelines set the rules for Doki Doki Literature Club mods and assets. Without these quidelines, we wouldn’t have a mod for you."
	    		color="#ffbde1"
	    		link="http://teamsalvato.com/ip-guidelines/"
	    		image={ teamSalvatoLogo }
	    	/>
	    	<BasicCard
	    		title="Joey Drew Studios"
	    		cardDescription="Joey Drew Studios’s/theMeatly Games’s Fan Content Policy sets the rules for the Angel entering the Doki universe. Without these guidelines, The Angel wouldn’t be in the Literature Club's world."
	    		color="#e6bf65"
	    		link="https://joeydrewstudios.com/fancontentpolicy"
	    		image={ jdsLogo }
	    	/>
	    	<BasicCard
	    		title="Doki Doki Modification Club"
	    		cardDescription="The DDMC community seeks out to make sure that every mod is as enjoyable as it is copyright issue-free and compliant against Team Salvato's guidelines."
	    		color="#A4D4FF"
	    		link="https://www.reddit.com/r/DDLCMods/comments/awcgqj/the_ddlc_modding_guide_2019_d/"
	    		image={ ddmcLogo }
	    	/>
	    </div>
	    <h1>Report a violation</h1>
	    <p>
	    	We strive to follow both policies to the best of our abilities so that we create an amazing, content-filled story. However, we do sometimes make mistakes that can violate these policies. If you discover a guideline violation in any of our mods, please click "Report a Concern" at the top of this page or do any of the following:
	    	<ul>
	    		<li>Report an issue on the project's GitHub issues page</li>
	    		<li>Email a report to <a href="mailto:legal@aliceos.app">legal@aliceos.app</a></li>
	    		<li>Message a Director or Diplomat in The Studio. Via Discord, you can ping <b>@Diplomats</b> or <b>@Directors</b></li>
	    	</ul>
	    </p>
    </div>
  </Layout>
)

export default PoliciesPage
