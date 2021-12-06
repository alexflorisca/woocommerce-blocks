/**
 * External dependencies
 */
import { getAllBlocks, switchUserToAdmin } from '@wordpress/e2e-test-utils';

import { visitBlockPage } from '@woocommerce/blocks-test-utils';

import { insertBlockDontWaitForInsertClose } from '../../utils.js';

const block = {
	name: 'Products by Attribute',
	slug: 'woocommerce/products-by-attribute',
	class: '.wc-block-products-by-attribute',
};

describe( `${ block.name } Block`, () => {
	beforeAll( async () => {
		await switchUserToAdmin();
		await visitBlockPage( `${ block.name } Block` );
	} );

	it( 'renders without crashing', async () => {
		await expect( page ).toRenderBlock( block );
	} );

	it( 'can be inserted more than once', async () => {
		await insertBlockDontWaitForInsertClose( block.name );
		expect( await getAllBlocks() ).toHaveLength( 2 );
	} );

	it( 'shows category selector', async () => {
		await expect( page ).toMatchElement(
			`${ block.class } .woocommerce-search-list`
		);
	} );

	describe( 'attributes', () => {
		beforeEach( async () => {
			await openDocumentSettingsSidebar();
			await page.click( block.class );
		} );

		it( 'product count can be toggled', async () => {
			const toggleLabel = await findLabelWithText( 'Product count' );
			await expect( toggleLabel ).toToggleElement(
				`${ block.class } .wc-filter-element-label-list-count`
			);
		} );

		it( 'filter button can be toggled', async () => {
			const toggleLabel = await findLabelWithText( 'Filter button' );
			await expect( toggleLabel ).toToggleElement(
				`${ block.class } .wc-block-filter-submit-button`
			);
		} );
	} );
} );
