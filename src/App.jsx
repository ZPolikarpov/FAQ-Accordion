import star from "./assets/images/icon-star.svg"
import Accordion from "./components/Accordion"

function App() {

	return (
		<>
			<main className="container">
				<div className="card">
					<div className="card__header">
						<img src={star} />
						<h1 className="card__heading">FAQs</h1>
					</div>

					<Accordion/>

				</div>

			</main>
		</>
  )
}

export default App
