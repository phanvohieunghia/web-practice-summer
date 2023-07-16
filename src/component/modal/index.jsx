import { useSelector } from 'react-redux';
import CreateSomething from './CreateSomething/index';

const Modal = () => {
	const modal = useSelector((state) => state.modal);

	const ModalTypes = {
		CreateSomething,
	};

	const ModalType = ModalTypes[modal.type];

	return modal.active && <ModalType />;
};

export default Modal;
