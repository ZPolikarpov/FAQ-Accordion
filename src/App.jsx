import background from "./assets/images/background-pattern-desktop.svg"
import star from "./assets/images/icon-star.svg"
import Accordion from "./components/Accordion"
import React, { useState } from "react"

function App() {

	return (
		<>
			<img src={background} className="background__image"/>
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
