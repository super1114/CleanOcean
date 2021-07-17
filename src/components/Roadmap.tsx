const Roadmap = () => {
	return (
		<div className="roadmap">
			<div className="container text-center">
				<div className="heading">
					<h2>
						The Roadmap <div className="heading_style"></div>
					</h2>
				</div>

				<p>
					Our Team has hand picked the best, safest and most sustainable features in the DeFi space. The enthusiastic developer is already
					working on more upcoming features that will be implanted soon.{' '}
				</p>

				<div className="d-flex row" style={{ justifyContent: 'space-evenly' }}>
					<div className="single_entity col-lg-3 col-12">
						<img src="./assets/images/location.svg" alt="icon" />
						<span>1</span>
						<button>Launch</button>
					</div>

					<div className="single_entity col-lg-5 col-12 mt-lg-0 mt-4">
						<img src="./assets/images/location.svg" alt="icon" />
						<span>2</span>

						<button>New Token Launch “PLASTIC”</button>
					</div>

					<div className="single_entity col-lg-3 col-12 mt-lg-0 mt-4">
						<img src="./assets/images/location.svg" alt="icon" />
						<span>3</span>

						<button>CrossChain Platform Update</button>
					</div>
				</div>

				<div className="d-flex mt-3 row below_locations" style={{ justifyContent: 'space-evenly', paddingLeft: "190px",paddingRight: "190px" }}>
					<div className="single_entity col-lg-6 col-12">
						<img src="./assets/images/location.svg" alt="icon" />
						<span>4</span>
						<button>Games and Lottery</button>
					</div>

					<div className="single_entity col-lg-6 col-12 mt-lg-0 mt-4">
						<img src="./assets/images/location.svg" alt="icon" />
						<span>5</span>

						<button>Partnerships with NGO´s </button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Roadmap
