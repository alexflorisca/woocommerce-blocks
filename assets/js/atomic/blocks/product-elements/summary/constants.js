/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { page, Icon } from '@wordpress/icons';

export const BLOCK_TITLE = __(
	'Product Summary',
	'woo-gutenberg-products-block'
);
export const BLOCK_ICON = (
	<Icon icon={ page } className="wc-block-editor-components-block-icon" />
);
export const BLOCK_DESCRIPTION = __(
	'Display a short description about a product.',
	'woo-gutenberg-products-block'
);
