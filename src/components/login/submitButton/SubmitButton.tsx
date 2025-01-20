import classNames from 'classnames'

const SubmitButton = ({ label }: { label: string }) => (
	<button
		type="submit"
		className={classNames(
			'w-full rounded-b-lg rounded-t-lg pb-4 pt-4 mt-4 text-preset-4',
		)}
		style={{
			background: 'var(--color-grey-900)',
			color: 'var(--color-white)',
		}}
	>
		{label}
	</button>
)

export default SubmitButton