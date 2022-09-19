export type Page = {
	id: string
	name: string
	url?: string
	body: string
	is_visible?: boolean
	sort_order?: number
}

export type PageTypes = {
	page: Page
}

export type GetAllPagesOperation<T extends PageTypes = PageTypes> = {
	data: { pages: T['page'][] }
}

export type GetPageOperation<T extends PageTypes = PageTypes> = {
	data: { page?: T['page'] }
	variables: { id: string }
}
