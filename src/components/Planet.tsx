import {useQuery} from 'react-query'

const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
}

const Planet = () => {
    const {data, status} = useQuery('planets', fetchPlanets)
    console.log(status)
    return (
        <div> Planets
            {status === 'success' && data.results.map((planet: any) => (<div>{planet.name}</div>))}
        </div>)
}

export default Planet;
