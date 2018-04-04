import * as MobX from 'mobx';
import { observer } from 'mobx-react';
import { PageRef } from '../../store/page/page-ref';
import { PageTileComposite } from './page-tile-composite';
import * as React from 'react';
import { Store } from '../../store/store';

export interface PageTileContainerProps {
	page: PageRef;
}

@observer
export class PageTileContainer extends React.Component<PageTileContainerProps> {
	@MobX.observable public editable: boolean = false;
	@MobX.observable public focused: boolean = false;
	@MobX.observable public inputValue: string = '';

	public constructor(props: PageTileContainerProps) {
		super(props);
		this.inputValue = this.inputValue ? this.inputValue : props.page.getName();

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDoubleClick = this.handleDoubleClick.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.onFocus = this.onFocus.bind(this);
	}

	@MobX.action
	protected handleBlur(): void {
		this.editable = false;
	}

	@MobX.action
	protected handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
		this.inputValue = e.target.value;
	}

	@MobX.action
	protected handleClick(e: React.MouseEvent<HTMLElement>): void {
		console.log(e, 'please');
		this.focused = !this.focused;
		this.editable = false;
	}

	@MobX.action
	protected handleDoubleClick(e: React.MouseEvent<HTMLElement>): void {
		e.preventDefault();

		if (!this.focused) {
			this.focused = true;
		}
		Store.getInstance().openPage(this.props.page.getId());
	}

	@MobX.action
	protected handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
		switch (e.key.toString()) {
			case 'Escape':
				this.inputValue = this.props.page.getName();
				this.editable = false;
				break;

			case 'Enter':
				if (!this.inputValue) {
					this.inputValue = this.props.page.getName();
					this.editable = false;
					return;
				}

				this.props.page.setName(this.inputValue);
				this.editable = false;
				break;

			default:
				return;
		}
	}

	@MobX.action
	protected onFocus(): void {
		this.focused = !this.focused;
	}

	public render(): JSX.Element {
		return (
			<PageTileComposite
				editable={this.editable}
				focused={this.focused}
				id={this.props.page.getId()}
				name={this.inputValue}
				onBlur={this.handleBlur}
				onClick={this.handleClick}
				onDoubleClick={this.handleDoubleClick}
				value={this.inputValue}
			/>
		);
	}
}
