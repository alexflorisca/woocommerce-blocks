/**
 * External dependencies
 */
import { Icon, paragraph } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { Edit, Save } from './edit';
import metadata from './block.json';

registerBlockType( metadata, {
	icon: {
		src: (
			<Icon
				icon={ paragraph }
				className="wc-block-editor-components-block-icon"
			/>
		),
	},
	edit: Edit,
	save: Save,
} );
