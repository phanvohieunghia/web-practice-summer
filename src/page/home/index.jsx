import { useEffect, useMemo, useState } from 'react'
import UserService from '@/service/user'
import Table from '@/component/table'
import './style.scss'
import { useDispatch } from 'react-redux'
import { close, open } from '@/component/modal/store'
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

	return (
		<div className="home-page">
			<Table data={data?.data || []} column={columns} />
			<button onClick={handleClick}>open</button>
			<button onClick={handleClick2}>close</button>
		</div>
	)
}

export default Home
