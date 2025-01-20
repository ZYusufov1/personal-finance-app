import classNames from 'classnames'

const ToggleLink = ({
	                    isSignUp,
	                    onClick,
                    }: {
	isSignUp: boolean;
	onClick: () => void;
}) => (
	<div
		className={classNames(
			'text-preset-4 w-full flex flex-row gap-2 justify-center',
		)}
		style={{ color: 'var(--color-grey-500)' }}
	>
		{isSignUp ? 'Already have an account?' : 'Need to create an account?'}
		<button
			className={classNames(
				'text-preset-4 !font-bold hover:underline hover:cursor-pointer',
			)}
			style={{ color: 'var(--color-grey-900)' }}
			onClick={onClick}
		>
			{isSignUp ? 'Login' : 'Sign Up'}
		</button>
	</div>
)

export default ToggleLink