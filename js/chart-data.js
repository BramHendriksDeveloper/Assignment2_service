var randomScalingFactor = function () { return Math.round(Math.random() * 1000) };

var lineChartData = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
		},
		{
			label: "My Second dataset",
			fillColor: "rgba(48, 164, 255, 0.2)",
			strokeColor: "rgba(48, 164, 255, 1)",
			pointColor: "rgba(48, 164, 255, 1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(48, 164, 255, 1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
		}
	]

}

var barChartData = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			fillColor: "rgba(220,220,220,0.5)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
		},
		{
			fillColor: "rgba(48, 164, 255, 0.2)",
			strokeColor: "rgba(48, 164, 255, 0.8)",
			highlightFill: "rgba(48, 164, 255, 0.75)",
			highlightStroke: "rgba(48, 164, 255, 1)",
			data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
		}
	]

}

var pieData = [
				{
		value: 100,
		color: "#1ebfae",
		highlight: "#3cdfce",
		label: "Success"
				},
				{
		value: 20,
		color: "#f9243f",
		highlight: "#f6495f",
		label: "Non success"
				},
				{
		value: 120,
		color: "#1effaf",
		highlight: "#3cdfce",
		label: "Success"
				},
				{
		value: 24,
		color: "#0f249f",
		highlight: "#06495f",
		label: "Extern"
				}
];
var pieData2 = [
				{
		value: 100,
		color: "#1ebfae",
		highlight: "#3cdfce",
		label: "Success"
				},
				{
		value: 9,
		color: "#f9243f",
		highlight: "#f6495f",
		label: "Non success"
				},
				{
		value: 11,
		color: "#0f249f",
		highlight: "#06495f",
		label: "Extern"
				}
];

var doughnutData = [
	{
		value: 300,
		color: "#30a5ff",
		highlight: "#62b9fb",
		label: "Geplande kosten"
	},
	{
		value: 10,
		color: "#ffb53e",
		highlight: "#fac878",
		label: "Marge"
	},
	{
		value: 100,
		color: "#1ebfae",
		highlight: "#3cdfce",
		label: "Teal"
	},
	{
		value: 10,
		color: "#f9243f",
		highlight: "#f6495f",
		label: "Overschrijding "
	}
];

window.onload = function () {
	var chart1 = document.getElementById("line-chart");
	if (chart1) {
		chart1 = chart1.getContext("2d");
		window.myLine = new Chart(chart1).Line(lineChartData, {
			responsive: true
		});
	}
	var chart2 = document.getElementById("bar-chart");
	if (chart2) {
		chart2 = chart2.getContext("2d");
		window.myBar = new Chart(chart2).Bar(barChartData, {
			responsive: true
		});
	}
	var chart3 = document.getElementById("doughnut-chart");
	if (chart3) {
		chart3 = chart3.getContext("2d");
		window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {
			responsive: true
		});
	}
	var chart4 = document.getElementById("pie-chart");
	if (chart4) {
		chart4 = chart4.getContext("2d");
		window.myPie = new Chart(chart4).Pie(pieData, {
			responsive: true
		});
	}

	var chart5 = document.getElementById("pie-chart2");
	if (chart5) {
		chart5 = chart5.getContext("2d");
		window.myPie = new Chart(chart5).Pie(pieData2, {
			responsive: true
		});
	}

};