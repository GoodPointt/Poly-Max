import { useMediaQuery } from '@chakra-ui/react'

const BrandLogo = () => {
	const [isLargerThan768] = useMediaQuery('(max-width: 767px)')

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={!isLargerThan768 ? '200' : '160'}
			height={!isLargerThan768 ? '76' : '60'}
			viewBox="0 0 200 76"
			fill="none"
		>
			<g clipPath="url(#clip0_295_2471)">
				<path
					d="M38.5932 0H0V27.7526H36.8871C39.0066 27.7526 40.7248 29.473 40.7248 31.5951C40.7248 33.7173 39.0066 35.4376 36.8871 35.4376H0V76H40.7248V63.1178C57.1579 62.0199 70.1491 48.3275 70.1491 31.5951C70.1491 14.1458 56.0208 0 38.5932 0Z"
					fill="#212121"
				/>
				<path d="M153.093 76H115.139L81.0234 0H118.977L153.093 76Z" fill="#212121" />
				<path d="M200 76H162.047L127.932 0H165.884L200 76Z" fill="#212121" />
				<path
					d="M78.2511 12.8251L74.0702 22.1393C75.5165 25.94 76.3103 30.0625 76.3103 34.3715C76.3103 49.0641 67.102 61.6005 54.1492 66.5189L49.8926 76.001H87.8454L97.227 55.1012L78.2511 12.8251Z"
					fill="#212121"
				/>
			</g>
			<defs>
				<clipPath id="clip0_295_2471">
					<rect width="200" height="76" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

export default BrandLogo
