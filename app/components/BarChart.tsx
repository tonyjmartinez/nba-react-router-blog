import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
  labels: string[];
  data: number[];
  label?: string;
}

export default function BarChart({ labels, data, label = "Stats" }: Props) {
  const chartData = {
    labels,
    datasets: [
      {
        label,
        data,
        backgroundColor: "rgba(59,130,246,0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: false },
    },
  };
  return <Bar data={chartData} options={options} />;
}
