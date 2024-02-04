import { useState } from "react";
import plus from "../assets/images/icon-plus.svg"
import minus from "../assets/images/icon-minus.svg"

const arAccordeonItems = [
	{
		id: 0,
		heading: "What is Frontend Mentor, and how will it help me?",
		icon: plus,
		expanded: true,
		content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
	},
	{
		id: 1,
		heading: "Is Frontend Mentor free?",
		icon: plus,
		expanded: false,
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum ratione saepe voluptatum iure maxime. Hic fugiat magnam, odit maiores velit ea ipsa rerum voluptatum dolorem suscipit obcaecati ducimus est."
	},
	{
		id: 2,
		heading: "Can I use Frontend Mentor projects in my portfolio?",
		icon: plus,
		expanded: false,
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum ratione saepe voluptatum iure maxime. Hic fugiat magnam, odit maiores velit ea ipsa rerum voluptatum dolorem suscipit obcaecati ducimus est."
	},
	{
		id: 3,
		heading: "How can I get help if I'm stuck on a challenge?",
		icon: plus,
		expanded: false,
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum ratione saepe voluptatum iure maxime. Hic fugiat magnam, odit maiores velit ea ipsa rerum voluptatum dolorem suscipit obcaecati ducimus est."
	},
]


function Accordion() {
	const [items, setItems] = useState(() => arAccordeonItems)
	
	function handleClick(id) {
		setItems(items.map(item => {
			if (item.id === id) {
				return {...item, expanded: !item.expanded, icon: item.expanded? plus : minus }
			} else {
				return item
			}
		}))
	}

	return (
		<div className="accordion">
						{items.map((item, index) => (
							<div className="accordion__item" key={item.id}>
								<div className="accordion__item__heading" onClick={() => handleClick(index)}>
									<h2 className="heading-2">{item.heading}</h2>
									<img src={item.icon} alt="" />
								</div>
								<div className="accordion__item__content" data-expanded={item.expanded}>
									<p>{item.content}</p>
								</div>
							</div>
						))}

					</div>
	)
}

export default Accordion