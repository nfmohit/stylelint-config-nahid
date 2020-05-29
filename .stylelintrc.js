/**
 * Stylelint configuration file.
 *
 * @author Nahid Ferdous Mohit.
 * @since  1.0.0
 */

/*
 * Dependencies
 */
const nahidPrettierConfig = require( 'prettier-config-nahid' );

/*
 * Stylelint configuration
 */
module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-sass-guidelines',
		'stylelint-config-wordpress',
		'stylelint-prettier/recommended'
	],
	plugins: [ 'stylelint-scss' ],
	rules: {
		'prettier/prettier': [
			true,
			{
				...nahidPrettierConfig
			}
		],
		'declaration-colon-space-after': 'always-single-line',
		'max-nesting-depth': null,
		'selector-no-qualifying-type': [
			true,
			{
				'ignore': [
					'attribute',
					'class'
				]
			}
		],
		'no-descending-specificity': null,
		'selector-class-pattern': null,
		'property-no-vendor-prefix': [
			true,
			{
				'ignoreProperties': [
					'appearance'
				]
			}
		],
		'function-parentheses-space-inside': 'always'
	}
};
