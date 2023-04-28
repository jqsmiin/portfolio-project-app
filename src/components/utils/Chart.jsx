import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const [repos, setRepos] = useState(null);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/user/repos", {
        headers: {
          Authorization:
            "Bearer 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",
        },
      });

      const res = await data.json();
      const newData =
        res &&
        res.map((repo) => {
          return {
            label: repo.name,
            value: new Date(repo.created_at).toLocaleDateString(),
          };
        });

      newData.map((data) => {
        const year = data.value && data.value.split("/")[2];
        if (year === "2022") {
          setData1((prevData) => prevData.concat(data));
        } else if (year === "2023") {
          setData2((prevData) => prevData.concat(data));
        }
      });
      // Map trough new data, take a year, set a condition

      setRepos(newData);
    };

    fetchData();
  }, []);

  const dates = repos && repos.map((repo) => repo.value);
  const dates1 = data1 && data1.map((repo) => repo.value);
  const dates2 = data2 && data2.map((repo) => repo.value);
  const data = {
    labels: repos && repos.map((repo) => repo.label),
    datasets: [
      {
        label: "2022",
        data: dates1 && dates1.map((date) => new Date(date).getTime()),
        fill: false,
        borderColor: "rgba(234, 78, 53,1)",
        tension: 0.1,
      },
      {
        label: "2023",
        data: dates2 && dates2.map((date) => new Date(date).getTime()),
        fill: false,
        borderColor: "rgba(53, 234, 202, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          reverse: true,
        },
      },
    },
  };

  return (
    <>{repos ? <Line data={data} options={options} /> : <h3>Loading...</h3>}</>
  );
}

export default Chart;
