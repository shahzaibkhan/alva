// import * as MobX from 'mobx';
import * as React from 'react';

import Layout from '../../lsg/patterns/layout';
import { observer } from 'mobx-react';
import { PageRef } from '../../store/page/page-ref';
import { PageTileContainer } from './page-tile-container';

export interface PageListProps {
	pages: PageRef[];
}

export const PageListComposite: React.StatelessComponent<PageListProps> = observer(
	(props): JSX.Element => (
		<Layout>
			{props.pages.map((page: PageRef, i: number) => {
				console.log(page, 'PageListComposite pages are there');
				return <PageTileContainer key={i} page={page} />;
			})}
		</Layout>
	)
);
