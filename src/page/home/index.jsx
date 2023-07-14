import { useEffect, useMemo, useState } from 'react';
import UserService from '@/service/user';
import Table from '@/component/table';
import './style.scss';
import { useDispatch } from 'react-redux';
import { open } from '@/component/modal/store';

const Home = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState();

	const columns = useMemo(
		() => [
			{ header: 'Id', key: 'id' },
			{ header: 'Email', key: 'email' },
			{ header: 'First name', key: 'first_name' },
		],
		[]
	);

	useEffect(() => {
		UserService.getList().then((res) => {
			setData(res);
		});
	}, []);

	const handleClick = () => {
		dispatch(open());
	};
	return (
		<div className="home-page">
			<Table data={data?.data || []} column={columns} />
			<button onClick={handleClick}>hello</button>
		</div>
	);
};

export default Home;
