/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;

export default class Author extends Component {

	constructor( props ) {
		super( ...arguments );
	}

	render() {

		const {
			attributes,
			className,
		} = this.props;

		const {
			textAlign,
		} = attributes;

		return (
			<Fragment>
				<div
					className={ classnames(
						className,
					) }
					style={ {
						textAlign: textAlign,
					} }
				>
					{ this.props.children }
				</div>
			</Fragment>
		);
	}
}
