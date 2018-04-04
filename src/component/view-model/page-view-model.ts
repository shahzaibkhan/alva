import * as MobX from 'mobx';
import { PageRef } from '../../store/page/page-ref';
export class PageViewModel {
	@MobX.observable public editable: boolean = false;
	@MobX.observable public focused: boolean;
	@MobX.observable public inputValue: string = '';
	public readonly page: PageRef;
	public constructor(page: PageRef) {
		this.page = page;
		this.inputValue = this.inputValue ? this.inputValue : page.getName();

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDoubleClick = this.handleDoubleClick.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.onFocus = this.onFocus.bind(this);
	}

	@MobX.action
	public handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
		this.inputValue = e.target.value;
	}

	@MobX.action
	public handleClick(e: React.MouseEvent<HTMLElement>): void {
		console.log(e, 'please');
		this.focused = !this.focused;
	}

	@MobX.action
	public handleDoubleClick(e: React.MouseEvent<HTMLElement>): void {
		e.preventDefault();
		this.editable = !this.editable;
	}

	@MobX.action
	public handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
		switch (e.key.toString()) {
			case 'Escape':
				this.inputValue = this.page.getName();
				this.editable = false;
				break;

			case 'Enter':
				if (!this.inputValue) {
					this.inputValue = this.page.getName();
					this.editable = false;
					return;
				}

				this.page.setName(this.inputValue);
				this.editable = false;
				break;

			default:
				return;
		}
	}

	@MobX.action
	public onFocus(): void {
		this.focused = !this.focused;
	}
}
