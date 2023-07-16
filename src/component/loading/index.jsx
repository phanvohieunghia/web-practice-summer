import { AiOutlineLoading } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import './style.scss'

const Loading = () => {
	const loading = useSelector((state) => state.loading)

	return (
		loading.active && (
			<div className="loading">
				<AiOutlineLoading />
			</div>
		)
	)
}

export default Loading
