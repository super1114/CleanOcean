import { useEffect, useLayoutEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

const data = {
	datasets: [
		{
			data: [5, 8, 33, 33],
			backgroundColor: ['#68B3DA', '#AED3E5', '#2787B7', '#DBEAF1'],
		},
	],
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
const DonutChart = () => {
	const [width, height] = useWindowSize();
	return (<div className="donutchart" style={{position:"relative"}}>
		<p style={{position:"absolute", left:"40%", top:"42%", textAlign:"center"}}>Initial <br/>Supply</p>
		<p style={{position:"absolute", left:"12%", top:"-4%", textAlign:"center"}}>Developers Share</p>
		<p style={{position:"absolute", left:"-22%", top:"44%", textAlign:"center"}}>Presale</p>
		<p style={{position:"absolute", left:"72%", top:"-4%", textAlign:"center",}}>Locked Growth Fund</p>
		<p style={{position:"absolute", left:"98%", top:"64%", textAlign:"center",}}>Locked Liquidity</p>
		<p style={{position:"absolute", left:"53%", top:"10%", textAlign:"center", color:"white"}}>5%</p>
		<p style={{position:"absolute", left:"72%", top:"19%", textAlign:"center", color:"white"}}>8%</p>
		<p style={{position:"absolute", left:"7%", top:"45%", textAlign:"center"}}>33.5%</p>
		<p style={{position:"absolute", left:"74%", top:"64%", textAlign:"center", color:"white"}}>33.5%</p>
		<Doughnut type={Doughnut} data={data} />
	</div>)
}

export default DonutChart
