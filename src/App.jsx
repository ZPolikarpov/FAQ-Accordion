import background from "./assets/images/background-pattern-desktop.svg"
import star from "./assets/images/icon-star.svg"
import plus from "./assets/images/icon-plus.svg"

function App() {
	return (
		<>
			<img src={background} alt="" className="background__image"/>
			<main className="container">
				<div className="card">
					<div className="card__header">
						<img src={star} alt="" />
						<h1 className="card__heading">FAQs</h1>
					</div>

					<div className="accordion">

						<div className="accordion__item">
							<h2 className="heading-2"> What is Frontend Mentor, and how will it help me?</h2>
							<img src={plus} alt="" />
						</div>

						<div className="accordion__item">
							<h2 className="heading-2"> What is Frontend Mentor, and how will it help me?</h2>
							<img src={plus} alt="" />
						</div>

					</div>

				</div>

			</main>
		</>
  )
}

export default App
