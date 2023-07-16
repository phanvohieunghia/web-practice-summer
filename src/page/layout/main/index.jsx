import { useMemo } from 'react'
import LeftMenu from '@/component/leftMenu'
import './style.scss'
import { Outlet } from 'react-router-dom'
import Modal from '@/component/modal'
import Header from '@/component/header'

export const MainLayout = () => {
	const data = useMemo(
		() => [
			{ name: 'Home', key: '/' },
			{ name: 'Bank', key: '/bank' },
		],
		[]
	)

	return (
		<>
			<div className="_header">
				<Header />
			</div>
			<div className="_body">
				<div className="_left-menu">
					<LeftMenu data={data} />
				</div>
				<div className="_main">
					<Outlet />
				</div>
			</div>
			<Modal />
		</>
	)
}

export default MainLayout
