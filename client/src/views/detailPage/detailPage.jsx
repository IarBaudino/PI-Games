import { useDispatch, useSelector, useParams } from 'react-redux';
import { useState, useEffect } from 'react';
import { getById } from '../../redux/actions/actions';


import Card  from "../../components/card/card"


//ACA TENGO QUE DESPACHAR UNA ACTION QUE LLAMA AL ENDPOINT DE BUSQUEDA POR ID.

function DetailPage() {

  const params = useParams()
  const dispatch = useDispatch()

  const game  = useSelector((state) => state.gameId)

  const [searchId, setSearchId] = useState("")


  function handleChange(event) {
    event.preventDefault()
    setSearchId(event.target.value) 
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getById(searchId));
  }

  useEffect(()=>{
    dispatch(getById())
  },[dispatch]);

  return (
    <div >
        {game?.map(game => (
                <Card 
                id={game.id}
                name={game.name} 
                image={game.image}
                plataforms={game.plataforms}
                description={game.description}
                releaseDate={game.releaseDate}
                rating={game.rating}
                genre={game.genre}
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
                />
            ))}
      <p>Esta es la hermosa e increible DetailPage!</p>
    </div>
  );
}

export default DetailPage;


   














