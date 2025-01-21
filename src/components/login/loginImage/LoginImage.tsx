import loginPageImage from '../../../assets/loginAndSetup.png'
import Logo from '../../../assets/logo.svg?react'
import classNames from 'classnames'

interface LoginImageProps {
	isMobile?: boolean
}

const LoginImage = ({ isMobile }: LoginImageProps) => {
	if (isMobile) {
		return (
			<div
				className={'flex justify-center pl-10 pr-10 pt-6 pb-6 rounded-b-lg'}
				style={{ backgroundColor: 'var(--color-grey-900)' }}
			>
				<Logo/>
			</div>
		)
	} else {
		return (
			<div className="p-5">
				<div
					className="flex flex-col justify-between p-10 bg-cover bg-center rounded-lg h-full"
					style={{ backgroundImage: `url(${loginPageImage})` }}
				>
					<Logo
						className={''}
					/>

					<div
						className={classNames('flex flex-col gap-6 whitespace-pre-wrap text-left', 'text-preset-1')}
						style={{
							color: 'var(--color-white)',
							width: '90%',
							overflowWrap: 'break-word'
						}}
					>
						{
							'Keep track of your money and save for your future'
						}

						<div className={'text-preset-4'}>
							{
								'Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.'
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default LoginImage