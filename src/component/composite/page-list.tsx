import * as React from 'react';

import Layout from '../../lsg/patterns/layout';
import { observer } from 'mobx-react';
import { PageViewModel } from '../view-model/page-view-model';

import Space, { Size } from '../../lsg/patterns/space';

// import { PageRef } from '../../store/page/page-ref';
import { PreviewTile } from '../../lsg/patterns/preview-tile';

export interface PageListProps {
	pages: PageViewModel[];
}

export const PageList: React.StatelessComponent<PageListProps> = observer((props): JSX.Element => (
	<Layout>
		{props.pages.map((page: PageViewModel, i: number) => {
			console.log(page.editable, 'page list presentational');
			return (
				<Space key={i} size={Size.S}>
					<PreviewTile
						id={page.page.getId()}
						editable={page.editable}
						focused={page.focused}
						handleBlur={page.handleBlur}
						onChange={e => page.handleChange(e)}
						name={page.inputValue}
						onClick={e => page.handleClick(e)}
						onDoubleClick={e => page.handleDoubleClick(e)}
						onKeyDown={e => page.handleKeyDown(e)}
						value={page.inputValue}
					/>
				</Space>
			);
		})}
	</Layout>
));
