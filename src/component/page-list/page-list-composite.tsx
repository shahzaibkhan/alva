// import * as MobX from 'mobx';
import * as React from 'react';

import Layout from '../../lsg/patterns/layout';
import { observer } from 'mobx-react';
import { PageRef } from '../../store/page/page-ref';
import { PageTileContainer } from './page-tile-container';

export interface PageListProps {
	focusStates: boolean[];
	onClick: any;
	pages: PageRef[];
}

export const PageListComposite: React.StatelessComponent<PageListProps> = observer(
	(props): JSX.Element => (
		<Layout>
			{props.pages.map((page: PageRef, i: number) => {
				console.log(props, 'PageListComposite pages are there');
				return (
					<PageTileContainer
						focused={props.focusStates[i]}
						key={i}
						onClick={e => props.onClick(e, i)}
						page={page}
					/>
				);
			})}
		</Layout>
	)
);
