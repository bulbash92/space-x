import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import './Calendar.css';
import  Main from '../Main/Main';
import  useLaunches  from '../useLaunches/useLaunches'
import FetchData from '../../service/FetchData'

const fetchData = new FetchData();
const Calendar = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		fetchData.getLaunches(3, 0)
			.then(launches => setData(state =>[...launches]))
	}, []);

	return (
	<>
		<Main name='Календарь SpaceX'/>
		<section className="calendar">
			<div className="container">
				
				<ul className="calendar-list">
				{
				data.map(item => (
					<li key={item.id} className="calendar-item">
					<article className="launches">
						<div className="launches-image">
							<img src={item.links.patch.small} alt=""/>
							<a className="launches-youtube" href="https://www.youtube.com/watch?v=dLQ2tZEH6G0"></a>
						</div>
						<div className="launches-content">
							<h2 className="launches-title">{item.name}</h2>
							<Link to={`/details/${item.id}`} className="button launches-details">Подробнее</Link>
						</div>
					</article>
				</li>
					))}
					
				</ul>
			</div>
		</section>
	</>
	)
}

export default Calendar;