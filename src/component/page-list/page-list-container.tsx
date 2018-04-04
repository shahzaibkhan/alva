import * as MobX from 'mobx';
import * as React from 'react';

import { observer } from 'mobx-react';
import { PageListComposite } from './page-list-composite';
import { PageRef } from '../../store/page/page-ref';
import { Project } from '../../store/project';
import { Store } from '../../store/store';

@observer
export class PageListContainer extends React.Component<{}> {
	@MobX.observable public focusStates: boolean[] = this.setFocusStates();
	protected getPages(): PageRef[] {
		const project: Project | undefined = Store.getInstance().getCurrentProject();
		return project ? project.getPages() : [];
	}

	@MobX.action
	protected handleClick(e: React.MouseEvent<HTMLElement>, index: number): void {
		console.log(e.currentTarget, '**********', index);
		this.focusStates[index] = true;
		console.log(this.focusStates, ')))))))))))');
	}

	public render(): JSX.Element {
		return (
			<PageListComposite
				focusStates={this.focusStates}
				pages={this.getPages()}
				onClick={this.handleClick}
			/>
		);
	}

	@MobX.action
	protected setFocusStates(): boolean[] {
		const pages = this.getPages();
		const stateList: boolean[] = [];
		pages.forEach((page: PageRef, i: number) => {
			stateList.push(false);
		});
		return stateList;
	}
}
