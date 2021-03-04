import React from "react"
import SectionImages from "./images/SectionImages"

const Section = () => {

    const [search, setSearch] = React.useState(false)

    const toSearch = () => {
        setSearch(document.getElementById('textSearch').value)
    }

    const keyWords = ['Cataratas', 'Brazil', 'Canada', 'Machu Picchu', 'Rio de Janeiro', 'Veneza', 'Roma', 'Paris', 'Moscou', 'Havana']

    function randomWord(){
        let num = Math.floor(Math.random() * 10)
        return keyWords[num]
    }

    return (
        <section>
            <form 
                className="inputSearch"
                onSubmit={e => { e.defaultPrevented(); toSearch();}} 
                onKeyPress={e => {
                    if(e.which === 13){ 
                        e.preventDefault()
                        toSearch()
                    }
                }}
            >
                <label htmlFor="textSearch" style={{cursor: "pointer", marginRight: "15px"}}>Pesquisar</label>
                <input type="text" id="textSearch" placeholder="Pesquise por uma imagen" />
            </form>
                <SectionImages search={search ? search : randomWord()} />
        </section>
    )
}

export default Section