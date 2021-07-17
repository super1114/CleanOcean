import './App.css'
import Roadmap from './components/Roadmap'
import Features from './components/Features'
import Distribution from './components/Distribution'
import GetInTouch from './components/GetInTouch'
import HighlightedPoints from './components/HighlightedPoints'
import LandingPage from './components/LandingPage'
import Header from './components/Header'

function App() {
	return (
		<div className="App" style={{backgroundImage:"url(../assets/images/background.png)", backgroundSize:"cover"}}>
			<Header />

			<LandingPage />

			<HighlightedPoints />

			<Features />

			<Roadmap />

			<Distribution />

			<GetInTouch />
		</div>
	)
}

export default App
