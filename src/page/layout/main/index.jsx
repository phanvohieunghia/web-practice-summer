import { useMemo } from 'react';
import LeftMenu from '@/component/leftMenu';
import './style.scss';
import { Outlet } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';

export const MainLayout = () => {
	const data = useMemo(
		() => [
			{ name: 'Home', key: '/', icon: <GrHomeRounded /> },
			{ name: 'Bank', key: '/bank', icon: <GrHomeRounded /> },
		],
		[]
	);
	return (
		<>
			<div className="_header">Header</div>
			<div className="_body">
				<div className="_left-menu">
					<LeftMenu data={data} />
				</div>
				<div className="_main">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default MainLayout;
