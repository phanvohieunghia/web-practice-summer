import UITLogo from '@/assets/image/logo.webp'
import './style.scss'
import { IoLogOutOutline } from 'react-icons/io5'
const Header = () => {
	return (
		<div className="header">
			<img src={UITLogo} alt="error image" />
			<span className="title">UIT Practice</span>
			<button className="icon">
				<IoLogOutOutline className="_icon" />
			</button>
		</div>
	)
}

export default Header
