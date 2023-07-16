import { close } from '@/component/modal/store'
import clsx from 'clsx'
import { IoCloseSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import './style.scss'

const ModalFrame = (props) => {
	const { width = 400, title = '', action, children } = props

	const dispatch = useDispatch()

	const handleClose = () => {
		dispatch(close())
	}

	return (
		<div className="wrap-modal">
			<div className="modal" style={{ width: width }}>
				<div className="modal-header">
					<span>{title}</span>
					<button className="icon" onClick={handleClose}>
						<IoCloseSharp className="_icon" />
					</button>
				</div>
				<div className={clsx('modal-body', !action && 'empty')}>{children}</div>
				{action && (
					<div className="modal-footer">
						{action.map((_, i) => {
							return (
								<button key={i} onClick={_.onClick}>
									{_.name}
								</button>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
}

export default ModalFrame
