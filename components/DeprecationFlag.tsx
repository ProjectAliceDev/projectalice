import React, { FC } from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

interface DeprecationFlagProps {
	title?: string
}

const deprecationFlagRootCss = css({
	paddingTop: 4,
	paddingBottom: 4,
	paddingLeft: 6,
	paddingRight: 6,
	margin: 0,
	fontSize: '0.675em',
	color: "#b38f18",	
	borderColor: "#b38f18",
	borderWidth: 0.25,
	borderStyle: "solid",
	borderRadius: 4,
})

const DeprecationFlag: FC<DeprecationFlagProps> = (props) => {
	const title = props.title || "This project is no longer maintained by Project Alice and is not receiving updates."

	return (
		<div id="pa-deprecation-flag">
			<p css={ deprecationFlagRootCss } title={ title }>Deprecated</p>
		</div>
	)
}

export default DeprecationFlag