import react from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Places from "./data"

export default function App() {

  const cards = Places.map(place => {
    return (
      <Card
        key={place.id}
        {...place}
      />
    )
  })

  return (
    <div className="app--window">
      <Header />
      <section className="app--cards">
        {cards}
      </section>
    </div>
  )
}


//<Header />
//<Card />

