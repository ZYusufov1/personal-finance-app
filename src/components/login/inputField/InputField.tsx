import { ErrorMessage, Field } from 'formik'

const InputField = ({
    name,
    label,
    type = 'text',
    isPassword = false,
    showPassword,
    togglePasswordVisibility,
}: {
	name: string;
	label: string;
	type?: string;
	isPassword?: boolean;
	showPassword?: boolean;
	togglePasswordVisibility?: () => void;
}) => (
	<div className="flex flex-col items-start gap-1 relative w-full">
		<label className="text-preset-5" style={{ color: 'var(--color-grey-500)' }}>
			{label}
		</label>
		<div className="relative w-full">
			<Field
				name={name}
				type={isPassword && showPassword ? 'text' : type}
				className="h-[45px] rounded-b-lg rounded-t-lg w-full pr-10 p-1.5"
			/>
			{isPassword && togglePasswordVisibility && (
				<button
					type="button"
					className="absolute right-2 top-2 text-sm"
					onClick={togglePasswordVisibility}
				>
					{showPassword ? 'Hide' : 'Show'}
				</button>
			)}
		</div>
		<ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
	</div>
)

export default InputField