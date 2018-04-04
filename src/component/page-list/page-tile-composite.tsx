import * as React from 'react';

import { observer } from 'mobx-react';
import { PreviewTile, PreviewTileProps } from '../../lsg/patterns/preview-tile';
import Space, { Size } from '../../lsg/patterns/space';

export const PageTileComposite: React.StatelessComponent<PreviewTileProps> = observer(
	(props): JSX.Element => {
		console.log(props, '__________');
		return (
			<Space size={Size.S}>
				<PreviewTile
					editable={props.editable}
					id={props.id}
					focused={props.focused}
					onBlur={props.onBlur}
					onChange={props.onChange}
					name={props.inputValue}
					onClick={props.onClick}
					onDoubleClick={props.onDoubleClick}
					onKeyDown={props.onKeyDown}
					value={props.inputValue}
				/>
			</Space>
		);
	}
);