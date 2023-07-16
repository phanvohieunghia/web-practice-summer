import { useEffect, useMemo, useState } from 'react'
import UserService from '@/service/user'
import Table from '@/component/table'
import './style.scss'
import { useDispatch } from 'react-redux'
import { close, open } from '@/component/modal/store'
import {
	open as openLoading,
	close as closeLoading,
} from '@/component/loading/store'
import { MODALTYPE } from '@/utilities/constant'

const Home = () => {
	const dispatch = useDispatch()

	const [data, setData] = useState()

	const columns = useMemo(
		() => [
			{ header: 'Id', key: 'id' },
			{ header: 'Email', key: 'email' },
			{ header: 'First name', key: 'first_name' },
		],
		[]
	)

	useEffect(() => {
		UserService.getList().then((res) => {
			setData(res)
		})
	}, [])

	const handleClick = () => {
		dispatch(open({ type: MODALTYPE.createSomething, data: 'test' }))
	}
	const handleClick2 = () => {
		dispatch(close())
	}

	const handleClick3 = () => {
		dispatch(openLoading())
	}
	const handleClick4 = () => {
		dispatch(closeLoading())
	}

	return (
		<div className="home-page">
			<Table data={data?.data || []} column={columns} />
			<div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
				<button onClick={handleClick}>open</button>
				<button onClick={handleClick2}>close</button>
				<button onClick={handleClick3}>Open Loading</button>
				<button onClick={handleClick4}>Close Loading</button>
			</div>
		</div>
	)
}

export default Home
