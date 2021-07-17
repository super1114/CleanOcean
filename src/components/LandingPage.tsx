import OpenBook from '../assets/images/open-book.svg'
import coin from '../assets/images/coin.svg'
import balloon from '../assets/images/balloon.png'
import Turtle from '../assets/images/Turtle.svg'

const LandingPage = () => {
	return (
		<div className="landing_page">
			<button className="connectWallet">Connect your Wallet </button>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-12">
						<div className="landing_page_content">
							<div className="new_button">
								<button className="new_btn">New!</button>
								<img src="../assets/images/telegram.png" className="telegram" />
							</div>

							<h1 className="mt-3 big_white_text">
								The first <br />
								Ocean-cleanup <br />
								DeFi project.
							</h1>

							<p className="small_black_text">The unique Yield Platform that will transform our oceans by removing plastic.</p>

							<div className="row" style={{marginTop:"50px"}}>
								<div className="col-lg-4 col-6">
									<button className="white_btn">
										<img src={OpenBook} alt="OpenBook" /> LitePaper
									</button>
								</div>
								<div className="col-lg-4 col-6">
									<button className="white_btn">
										<img src={coin} alt="coin" /> Donations
									</button>
								</div>
								<div className="mt-4 col-12 col-lg-8">
									<button className="white_btn">
										<img src="../assets/images/balloon.png" alt="app" />	Launch App
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-12 landing_page_turtle">
						<img src={Turtle} alt="turtle" />
					</div>
				</div>
				<div className="row icon_group">
					<div className="col-lg-1 col-12"></div>								
					<div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-12 icon_image_div">
						<img src="../assets/images/binance.png" alt="" className="icon_image" />
					</div>	
					<div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-12 icon_image_div">
						<img src="../assets/images/metamask.png" alt="" className="icon_image" />
					</div>
					<div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-12 icon_image_div">
						<img src="../assets/images/mathwallet.png" alt="" className="icon_image" />
					</div>
					<div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-12 icon_image_div">
						<img src="../assets/images/trustwallet.png" alt="" className="icon_image" />
					</div>
					<div className="col-xs-4 col-sm-4 col-md-2 col-lg-2 col-12 icon_image_div">
						<img src="../assets/images/walletconnection.png" alt="" className="icon_image" />
					</div>		
					<div className="col-lg-1 col-12"></div>								
				</div>
			</div>
		</div>
	)
}

export default LandingPage
