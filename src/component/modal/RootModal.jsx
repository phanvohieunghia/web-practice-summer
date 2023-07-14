import { useSelector } from 'react-redux';
import CreateSomething from './CreateSomething/index';

const RootModal = () => {
	const modal = useSelector((state) => state.modal);
	console.log(modal);

	const modalType = {
		CreateSomething,
	};

	const ModalComponent = modalType[modal.type];

	return <>{modal.active && <ModalComponent />}</>;
};

export default RootModal;
