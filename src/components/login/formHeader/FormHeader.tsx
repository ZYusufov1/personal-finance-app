const FormHeader = ({ isSignUp }: { isSignUp: boolean }) => (
	<h1 className="text-preset-1" style={{ color: 'var(--color-grey-900)' }}>
		{isSignUp ? 'Sign Up' : 'Login'}
	</h1>
)

export default FormHeader