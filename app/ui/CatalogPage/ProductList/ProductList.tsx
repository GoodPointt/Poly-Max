import { IProduct } from '@/app/lib/interfaces'
import { Locale } from '@/i18n.config'
import { Grid, Text } from '@chakra-ui/react'
import React from 'react'

import ProductItem from '../ProductItem/ProductItem'

interface IProductList {
	products: IProduct[]
	lang: Locale
}

const ProductList = ({ products, lang }: IProductList) => {
	return (
		<Grid
			as={'ul'}
			maxW={'100%'}
			gridTemplateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}
			gridGap={10}
			m={'0 auto'}
			padding={0}
		>
			{products.length > 0 ? (
				products.map((product) => (
					<ProductItem key={product.attributes.uid} product={product} lang={lang} />
				))
			) : (
				<Text fontSize={'20px'} fontWeight={600}>
					0 products
				</Text>
			)}
		</Grid>
	)
}

export default ProductList
