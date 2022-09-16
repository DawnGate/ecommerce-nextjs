export type ErrorData = {
	message: string
	code?: string
}

// only one in two type {code?, message} or {code?, errors:[]}
export type ErrorProps = {
	code?: string
} & (
	| { message: string; errors?: never }
	| { message?: never; errors: ErrorData[] }
)

// underfined => underfined! => I'm sure that will not underfined
export class CommerceError extends Error {
	code?: string
	errors: ErrorData[]

	constructor({ message, code, errors }: ErrorProps) {
		// get first errordata
		const error: ErrorData = message
			? { message, ...(code ? { code } : {}) }
			: errors![0]

		// pass to parent
		super(error.message)

		// init for errors variable
		this.errors = message ? [error] : errors!
		// change if need
		if (error.code) this.code = error.code
	}
}

// use to check the bad errors come from bad implementation of the hooks
export class ValidationError extends CommerceError {
	constructor(options: ErrorProps) {
		super(options)
		this.code = 'validation_error'
	}
}

export class FetcherError extends CommerceError {
	status: number
	constructor(
		options: {
			status: number
		} & ErrorProps
	) {
		super(options)
		this.status = options.status
	}
}
