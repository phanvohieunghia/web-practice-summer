import { IoCloseSharp } from 'react-icons/io5';
import './style.scss';

const Modal = (props) => {
	const { width = 400, title = '' } = props;
	return (
		<div className="wrap-modal">
			<div className="modal" style={{ width: width }}>
				<div className="modal-header">
					<span>{title}</span>
					<IoCloseSharp />
				</div>
				<div className="modal-body"></div>
				<div className="modal-footer"></div>
			</div>
		</div>
	);
};

export default Modal;
