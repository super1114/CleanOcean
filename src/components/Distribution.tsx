import DonutChart from './DonutChart'

const Distribution = () => {
	return (
		<div className="distribution">
			<div className="container text-center">
				<div className="heading">
					<h2>
						Our Distribution <div className="heading_style"></div>
					</h2>
				</div>
			</div>

			<div className="container-fluid mt-5">
				<div className="row mt-5 distribution_row">
					<div className="col-lg-6 graph_section col-12">
						<div className="graph">
							<DonutChart />
						</div>
					</div>
					<div className="col-lg-6 content_section col-12 mt-lg-0 mt-5">
						<div className="content">
							<p>Here’s how we will distribute the initial supply of CSEA tokens between Initial Liquidity, our Team, Marketing Costs </p>

							<div className="buttons_row mt-5">
								<button>Audit</button>
								<button>Burns</button>
							</div>

							<div className="buttons_row mt-3">
								<button>Donations</button>
								<button>Locked Liquidity</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Distribution
