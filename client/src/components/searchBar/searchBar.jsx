/* SearchBar: un input de búsqueda para encontrar videojuegos por nombre. */

function SearchBar() {


    return (
        <div>
            <form  >
                <div>
                    <div>
                        <input className='input' type='search' placeholder='Find your favorite game' />
                    </div>
                </div>
                <button type='submit'>Go!</button>
            </form>
        </div>

    )
}

export default SearchBar;