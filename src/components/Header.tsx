import { useState } from 'react'
import Logo from '../assets/images/Logo.svg'

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	const MobileMenu = () => {
		return (
			<div className="mobile_menu_overlay">
				<div className="close_btn" onClick={() => setShowMobileMenu(false)}>
					{' '}
					X{' '}
				</div>
				<div className="mobile_menu">
					<ul>
						<li>Home</li>
						<li>Dashboard</li>
						<li>Project</li>
						<li>Roadmap</li>
						<li>Features</li>
						<li>Audit</li>

						<li>
							<button style={{ background: '#DBEAF1', color: '#1F1F1F' }}>White Paper</button>
						</li>
						<li>
							<button style={{ background: '#2787B7', color: '#FFFFFF' }}>Launch App</button>
						</li>
					</ul>
				</div>
			</div>
		)
	}

	return (
		<div className="header">
			<div className="container" style={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<div className="left_side_header">
					<img src={Logo} alt="logo" />
					<h3>CleanOcean</h3>
				</div>

				<div className="right_side_header d-lg-block d-none">
					<ul>
						<li className="menu_item">Home</li>
						<li className="menu_item">Dashboard</li>
						<li className="menu_item">Project</li>
						<li className="menu_item">Roadmap</li>
						<li className="menu_item">Features</li>
						<li className="menu_item">Audit</li>
						<li className="btn_li">
							<button style={{ background: '#DBEAF1', color: '#1F1F1F' }}>White Paper</button>
						</li>
						<li className="btn_li">
							<button style={{ background: '#2787B7', color: '#FFFFFF' }}>Launch App</button>
						</li>
					</ul>
				</div>

				<div className="sm_screen_right_menu d-lg-none d-block" onClick={() => setShowMobileMenu(true)}>
					<div className="hamburger_line"></div>
					<div className="hamburger_line"></div>
					<div className="hamburger_line"></div>
				</div>
			</div>

			{showMobileMenu && <MobileMenu />}
		</div>
	)
}

export default Header
