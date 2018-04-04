import * as React from 'react';

import Layout from '../../lsg/patterns/layout';
import { observer } from 'mobx-react';
import { PageViewModel } from '../view-model/page-view-model';

import Space, { Size } from '../../lsg/patterns/space';

import { PageRef } from '../../store/page/page-ref';
import { PreviewTile } from '../../lsg/patterns/preview-tile';

export interface PageListProps {
	pages: PageViewModel[];
}

@observer
export class PageList extends React.Component<PageListProps> {
	public render(): JSX.Element {
		return (
			<Layout>
				{this.props.pages.map((page: PageViewModel, i: number) => {
					console.log(page.focused, 'the page');
					return (
						<Space key={i} size={Size.S}>
							<PreviewTile
								id={page.page.getId()}
								editable={page.editable}
								focused={page.focused}
								handleChange={() => ''}
								name={page.name}
								onClick={() => page.onClick() || false}
								value={'foo'}
							/>
						</Space>
					);
				})}
			</Layout>
		);
	}
}
