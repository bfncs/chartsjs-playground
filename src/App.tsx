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
import styles from "./App.module.css";

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
		responsive: true,
		maintainAspectRatio: false,
		categoryPercentage: 0.7,
		scales: {
			x: {
				stacked: true,
				grid: {
					display: false,
				},
			},
			y: {
				stacked: true,
			},
		},
		plugins: {
			legend: {
				display: false,
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
				label: "Eingehend (letzter Monat)",
				data: labels.map(() => faker.number.int({ min: 0, max: 150 })),
				backgroundColor: "#C0CFFF",
				stack: "lastMonth",
			},
			{
				label: "Ausgehend (letzter Monat)",
				data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
				backgroundColor: "#D4FBF8",
				stack: "lastMonth",
			},
			{
				label: "Eingehend (dieser Monat)",
				data: labels.map(() => faker.number.int({ min: 0, max: 150 })),
				backgroundColor: "#315DFF",
				stack: "currentMonth",
			},
			{
				label: "Ausgehend (dieser Monat)",
				data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
				backgroundColor: "#32E0DB",
				stack: "currentMonth",
			},
		],
	};

	return (
		<>
			<header>
				<h1>Analyse</h1>
			</header>
			<main className={styles.wrapper}>
				<Panel
					title={"Verteilung der Anrufe"}
					kpiValue={"420"}
					kpiChange={"+8%"}
				>
					<Bar options={options} data={data} />
				</Panel>
				<Panel
					title={"Anzahl Anrufe"}
					kpiValue={"378"}
					kpiChange={"-5%"}
					halfWidth
				>
					<Bar options={options} data={data} />
				</Panel>
				<Panel
					title={"Erreichbarkeitsquote"}
					kpiValue={"84%"}
					kpiChange={"+5%"}
					halfWidth
				>
					<Bar options={options} data={data} />
				</Panel>
			</main>
		</>
	);
}

export default App;
