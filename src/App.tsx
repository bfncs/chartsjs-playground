import { Bar } from "react-chartjs-2";
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { eachDayOfInterval, format } from "date-fns";

import { Panel } from "./Panel.tsx";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

function App() {
	const options = {
		categoryPercentage: 0.7,
		responsive: true,
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
		plugins: {
			legend: {
				position: "bottom" as const,
			},
			title: {
				display: false,
			},
		},
		elements: {
			bar: {
				borderRadius: 3,
			},
		},
	};

	const labels = eachDayOfInterval({
		start: new Date(2025, 1, 28),
		end: new Date(2025, 2, 28),
	});

	const data = {
		labels: labels.map((d) => format(d, "dd.MM.")),
		datasets: [
			{
				label: "Eingehend (dieser Monat)",
				data: labels.map(() => faker.number.int({ min: 0, max: 150 })),
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				stack: "Dieser Monat",
			},
			{
				label: "Ausgehend (dieser Monat)",
				data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
				backgroundColor: "rgba(53, 162, 235, 0.5)",
				stack: "Dieser Monat",
			},
			{
				label: "Eingehend (letzter Monat)",
				data: labels.map(() => faker.number.int({ min: 0, max: 150 })),
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				stack: "Letzter Monat",
			},
			{
				label: "Ausgehend (letzter Monat)",
				data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
				backgroundColor: "rgba(53, 162, 235, 0.5)",
				stack: "Letzter Monat",
			},
		],
	};

	return (
		<>
			<header>
				<h1>Analyse</h1>
			</header>
			<main>
				<Panel title={"Verteilung der Anrufe"}>
					<Bar options={options} data={data} />
				</Panel>
			</main>
		</>
	);
}

export default App;
