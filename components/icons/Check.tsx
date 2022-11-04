const Check = ({ ...props }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			{...props}
		>
			<path
				d="M20 6 L9 17 L4 12"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	)
}

export default Check
