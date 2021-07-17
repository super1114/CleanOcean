const GetInTouch = () => {
	return (
		<div className="get_in_touch">
			<div className="container text-center">
				<div className="heading">
					<h2>
						Get in touch <div className="heading_style"></div>
					</h2>
				</div>
				<p className="email_text">cleanocean@contact.com</p>
				<div className="touch_row">
					<img className="icon_getintouch" src="./assets/images/telegram.png" alt="getintouch"  style={{ width:"92px", cursor:"pointer"}} />
					<img className="" src="./assets/images/twitter.png" alt="getintouch" style={{marginLeft:"50px", width:"92px", cursor:"pointer"}}/>
				</div>
				<div className="touch_row" style={{marginTop:"50px"}}>
					<img className="icon_getintouch" src="./assets/images/m.png" alt="getintouch" style={{ width:"92px", cursor:"pointer"}} />
					<img className="icon_getintouch" src="./assets/images/getintouch.svg" alt="getintouch" style={{marginLeft:"50px"}} />
				</div>
				<h6 style={{marginTop:"155px", fontSize:"25px", lineHeight:"31px"}}>Copyright © - All rights reserved </h6>
			</div>
		</div>
	)
}

export default GetInTouch
