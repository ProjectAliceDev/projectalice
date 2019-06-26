import React, { Component } from 'react';
import Link from 'next/link';
import Icon from '@mdi/react';

/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core';
import facepaint from 'facepaint';

import logomark from '../assets/logomark.svg';
import { 
	mdiGithubCircle, 
	mdiTwitter, 
	mdiMastodon, 
	mdiReddit,
	mdiMenu 
} from '@mdi/js';

interface NavbarState {
	mobileMenuOpen: boolean
}

const breakpoints = facepaint([
	'@media(min-width: 420px)',
  	'@media(min-width: 768px)',
  	'@media(min-width: 1120px)'
])

// MARK: Navigation bar styles
const navbarRootStyles = css({
	backgroundColor: "rgb(240, 240, 240)",
	height: 48,
	verticalAlign: "middle",
	width: "auto",
	marginLeft: "auto",
	marginRight: "auto",
	paddingLeft: 48,
	paddingRight: 48,
})

const navbarStyles = css({
	maxWidth: 1000, 
	display: 'flex', 
	marginLeft: "auto", 
	marginRight: "auto"
})

const navbarLogoStyles = css({
	height: 32,
	width: "auto",
	position: "relative",
	top: 6,
	'& img': {
		height: "100%",
		width: "auto",
		fill: "#333",
	},
	paddingRight: 24,
	flexGrow: 1,
	textAlign: "center"
})

const navbarLinksStyles = css(breakpoints({
	display: ['none', 'none', 'flex'],
	width: "100%",
	verticalAlign: 'middle',
	paddingTop: 12,
	paddingBottom: 12,
	paddingLeft: 12,
	paddingRight: 36,
	flexGrow: 1,
	'& a': {
		flexGrow: 1,
		marginLeft: "auto",
		marginRight: "auto",
		textAlign: "center",
		textDecoration: "none",
		color: "#333"
	},
	'& a:hover': {
		color: "#999"
	}
}))

const navbarIconLinkStyles = css(breakpoints({
	flexGrow: 1,
	display: ["none", "none", "flex"],
	paddingTop: 12,
	paddingBottom: 12,
	'& a': {
		paddingLeft: 8,
		paddingRight: 8
	},
}))

// MARK: Mobile menu styles
const mobileMenuFadeinAnimation = keyframes`
	0% {
    	opacity: 0;
    	transform: translateY(-20px);
	}
   100% {
      opacity: 1;
      transform: translateY(0);
   }
`


const mobileMenuBarButton = css(breakpoints({
	display: ["flex", "flex", "none"],
	flexGrow: 1,
	paddingTop: 12,
	paddingBottom: 12,
	marginLeft: -24,
}))

const mobileMenuSpacer = css(breakpoints({
	display: ["flex", "flex", "none"],
	flexGrow: 1	
}))

const mobileMenuRootStyles = css(breakpoints({
	backgroundColor: "rgb(240, 240, 240)",
	paddingLeft: 16,
	paddingRight: 16,
	paddingBottom: 16,
	animation: `${ mobileMenuFadeinAnimation } 0.75s ease`
}));

const mobileMenuLinksStyles = css({
	display: 'grid',
	'& a': {
		paddingTop: 8,
		paddingBottom: 8,
		textAlign: "center",
		textDecoration: "none",
		color: "#333"
	},
	'& a:hover': {
		color: "#999"
	}
})

const mobileMenuIconLinkStyles = css(breakpoints({
	paddingTop: 16,
	borderTopColor: "#c3c3c3",
	borderTopWidth: 0.25,
	borderTopStyle: "solid",
	display: 'block',
	marginLeft: "auto",
	marginRight: "auto",
	textAlign: "center",
	'& a': {
		paddingLeft: 8,
		paddingRight: 8
	},
}))

class Navbar extends Component<any, NavbarState> {

	constructor(props: any) {
		super(props);

		this.state = {
			mobileMenuOpen: false
		}
	}

	toggleMobileMenu() {
		this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen })
	}

	render() {
		const { mobileMenuOpen } = this.state;
		return (
			<div id = "pa-navbar-region">
				<div id = "pa-navbar" css={ navbarRootStyles }>
					<div css={ navbarStyles }>
						<div css={ mobileMenuBarButton }>
							<div onClick={ () => this.toggleMobileMenu() }>
								<a>
									<Icon path={ mdiMenu }
								        size={ 1 }
								        color="#333"/>
								</a>
							</div>
						</div>
						<div id = "pa-navbar-logo" css={ navbarLogoStyles }>
							<Link href="/">
								<a><img src={ logomark }/></a>
							</Link>
						</div>
						<div id = "pa-navbar-links" css={ navbarLinksStyles }>
							<Link href="/about">
								<a>About</a>
							</Link>
							<Link href="https://aliceos.app">
								<a>AliceOS</a>
							</Link>
							<Link href="/mods">
								<a>Mods</a>
							</Link>
							<Link href="/chat">
								<a>The Studio</a>
							</Link>
						</div>
						<div css={ navbarIconLinkStyles }>
							<Link href="https://github.com/projectalicedev">
								<a>
									<Icon path={ mdiGithubCircle }
								        size={ 1 }
								        color="#333"/>
								</a>
							</Link>
							<Link href="https://reddit.com/r/theangelreturns">
								<a>
									<Icon path={ mdiReddit }
								        size={ 1 }
								        color="#333"/>
								</a>
							</Link>
							<Link href="https://twitter.com/justaliceproj">
								<a>
									<Icon path={ mdiTwitter }
								        size={ 1 }
								        color="#333"/>
								</a>
							</Link>
							<Link href="https://mastodon.social/@projectalice">
								<a>
									<Icon path={ mdiMastodon }
								        size={ 1 }
								        color="#333"/>
								</a>
							</Link>
						</div>
						<div css={ mobileMenuSpacer }>
							<p>&nbsp;</p>
						</div>
					</div>
				</div>
				{
					mobileMenuOpen ?
					<div id = "pa-navbar-mobile-menu" css={ mobileMenuRootStyles }>
						<div id = "pa-navbar-mobile-menu-links" css={ mobileMenuLinksStyles }>
							<Link href="/about">
								<a>About</a>
							</Link>
							<Link href="https://aliceos.app">
								<a>AliceOS</a>
							</Link>
							<Link href="/mods">
								<a>Mods</a>
							</Link>
							<Link href="/chat">
								<a>The Studio</a>
							</Link>
						</div>
						<div id = "pa-navbar-mobile-menu-icon-links" css={ mobileMenuIconLinkStyles }>
							<Link href="https://github.com/projectalicedev">
								<a>
									<Icon path={ mdiGithubCircle }
								        size={ 1 }
								        color="#333"/>
								</a>
							</Link>
							<Link href="https://reddit.com/r/theangelreturns">
								<a>
									<Icon path={ mdiReddit }
								        size={ 1 }
								        color="#333"/>
								</a>
							</Link>
							<Link href="https://twitter.com/justaliceproj">
								<a>
									<Icon path={ mdiTwitter }
								        size={ 1 }
								        color="#333"/>
								</a>
							</Link>
							<Link href="https://mastodon.social/@projectalice">
								<a>
									<Icon path={ mdiMastodon }
								        size={ 1 }
								        color="#333"/>
								</a>
							</Link>
						</div>
					</div>: null
				}
			</div>
		)
	}
}

export default Navbar;