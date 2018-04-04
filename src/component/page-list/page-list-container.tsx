// import * as MobX from 'mobx';
import * as React from 'react';

import { PageListComposite } from './page-list-composite';
import { PageRef } from '../../store/page/page-ref';
import { Project } from '../../store/project';
import { Store } from '../../store/store';

export class PageListContainer extends React.Component<{}> {
	protected getPages(): PageRef[] {
		const project: Project | undefined = Store.getInstance().getCurrentProject();
		return project ? project.getPages() : [];
	}

	public render(): JSX.Element {
		return <PageListComposite pages={this.getPages()} />;
	}
}
