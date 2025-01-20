import '../../styles/fonts.css'
import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
// @ts-ignore
import CryptoJS from 'crypto-js'
import InputField from '../../components/login/inputField/InputField.tsx'
import ToggleLink from '../../components/login/toggleLink/ToggleLink.tsx'
import LoginImage from '../../components/login/loginImage/LoginImage.tsx'
import FormHeader from '../../components/login/formHeader/FormHeader.tsx'
import SubmitButton from '../../components/login/submitButton/SubmitButton.tsx'

interface FormValues {
	name: string;
	email?: string;
	password: string;
}

const LoginPage = () => {
	const [isSignUp, setIsSignUp] = useState(false)
	const [message, setMessage] = useState<string | null>(null)
	const [showPassword, setShowPassword] = useState(false)

	const togglePasswordVisibility = () => setShowPassword(!showPassword)

	const getValidationSchema = (isSignUp: boolean) =>
		Yup.object({
			name: Yup.string().required('Required'),
			email: isSignUp
				? Yup.string().email('Invalid email address').required('Required')
				: Yup.string().nullable(),
			password: Yup.string()
				.min(8, 'Password must be at least 8 characters')
				.required('Required'),
		})
	
	const handleRegistration = (values: FormValues) => {
		const encryptedPassword = CryptoJS.AES.encrypt(
			values.password,
			'secret-key',
		).toString()

		const userData = {
			name: values.name,
			email: values.email,
			password: encryptedPassword,
		}

		localStorage.setItem('user', JSON.stringify(userData))
		setMessage('Registration successful! Please log in.')
		setIsSignUp(false)
	}

	const handleLogin = (values: FormValues) => {
		const userData = localStorage.getItem('user')
		if (!userData) {
			setMessage('No account found. Please sign up.')
			return
		}

		const parsedData = JSON.parse(userData)

		const decryptedPassword = CryptoJS.AES.decrypt(
			parsedData.password,
			'secret-key',
		).toString(CryptoJS.enc.Utf8)

		if (
			values.name === parsedData.name &&
			values.password === decryptedPassword
		) {
			setMessage('Login successful! Welcome!')
		} else {
			setMessage('Invalid credentials. Please try again.')
		}
	}

	const handleSubmit = (values: FormValues) => {
		if (isSignUp) {
			handleRegistration(values)
		} else {
			handleLogin(values)
		}
	}

	return (
		<div className="flex flex-row h-full">
			<LoginImage />
			<div className="flex justify-center items-center w-full">
				<div className="max-w-[560px] w-full flex flex-col items-start gap-8 p-8">
					<FormHeader isSignUp={isSignUp} />
					{message && (
						<div
							className="text-preset-4 text-center mb-4"
							style={{ color: 'var(--color-grey-900)' }}
						>
							{message}
						</div>
					)}
					<Formik
						initialValues={{ name: '', email: '', password: '' }}
						validationSchema={getValidationSchema(isSignUp)}
						onSubmit={handleSubmit}
					>
						<Form className="flex flex-col gap-4 w-full">
							<InputField name="name" label="Name" />
							{isSignUp && <InputField name="email" label="Email" type="email" />}
							<InputField
								name={'password'}
								type={'password'}
								label={isSignUp ? 'Create Password' : 'Password'}
								isPassword={true}
								showPassword={showPassword}
								togglePasswordVisibility={togglePasswordVisibility}
							/>
							<SubmitButton label={isSignUp ? 'Create Account' : 'Login'} />
						</Form>
					</Formik>
					<ToggleLink isSignUp={isSignUp} onClick={() => setIsSignUp(!isSignUp)} />
				</div>
			</div>
		</div>
	)
}

export default LoginPage
