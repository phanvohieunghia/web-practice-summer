import Modal from '@/component/modal';
import { useDispatch } from 'react-redux';
import { close } from '@/component/modal/store';

const CreateSomething = () => {
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(close());
	};

	return (
		<Modal
			title="Create something"
			action={[
				{ name: 'Create', onClick: null },
				{ name: 'Close', onClick: closeModal },
			]}>
			<p> helfeof</p>
		</Modal>
	);
};

export default CreateSomething;
