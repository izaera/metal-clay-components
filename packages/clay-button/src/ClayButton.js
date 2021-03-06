'use strict';

import 'clay-icon';
import Component from 'metal-component';
import Soy from 'metal-soy';
import { Config } from 'metal-state';

import templates from './ClayButton.soy.js';

/**
 * Metal Clay Button component.
 */
class ClayButton extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayButton.STATE = {
	/**
	 * Aria label attribute for the link element.
	 * @instance
	 * @memberof ClayButton
	 * @type {string}
	 * @default ''
	 */
	ariaLabel: Config.string(),

	/**
	 * Renders the button as a block element.
	 * @instance
	 * @memberof ClayButton
	 * @type {boolean}
	 * @default false
	 */
	block: Config.bool().value(false),

	/**
	 * The button disabled attribute.
	 * @instance
	 * @memberof ButtonBase
	 * @type {boolean}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * The href attribute value of the link.
	 * @instance
	 * @memberof ButtonBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	href: Config.string(),

	/**
	 * Render ClayIcon in the ClayButton element, available options are
	 * `elementClasses`, `spritemap`, `symbol`.
	 * @instance
	 * @memberof ClayButton
	 * @type {?Object|undefined}
	 * @default undefined
	 */
	icon: Config.object(),

	/**
	 * The label of the button or link content.
	 * @instance
	 * @memberof ButtonBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	label: Config.string(),

	/**
	 * The name attribute value of the element.
	 * @instance
	 * @memberof ButtonBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	name: Config.string(),

	/**
	 * The name that will make the CSS class name that will represent the
	 * button size.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	size: Config.string(),

	/**
	 * The css class that colors the button.
	 * @instance
	 * @memberof ClayButton
	 * @type {?string|undefined}
	 * @default undefined
	 */
	style: Config.string(),

	/**
	 * The type attribute value of the element.
	 * @instance
	 * @memberof ButtonBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	type: Config.string(),

	/**
	 * The value attribute value of the element.
	 * @instance
	 * @memberof ButtonBase
	 * @type {?string|undefined}
	 * @default undefined
	 */
	value: Config.string(),
};

Soy.register(ClayButton, templates);

export { ClayButton };
export default ClayButton;
