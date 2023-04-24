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
import { Line, Bar } from "react-chartjs-2";
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
  const dataset1 = repos.map((val) => {
    const year = val.value.split("/")[2];
    console.log(year, 123);
  });

  console.log(dataset1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/user/repos", {
        headers: {
          Authorization: "Bearer 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",
        },
      });

      const res = await data.json();

      console.log(res);

      const newData = res.map((repo) => {
        return {
          label: repo.name,
          value: new Date(repo.created_at).toLocaleDateString(),
        };
      });
      setRepos(newData);
    };

    fetchData();
  }, []);

  const dates = repos && repos.map((repo) => repo.value);
  const data = {
    labels: dates && dates,
    datasets: [
      {
        label: "2021",
        data: dates && dates.map((date) => new Date(date).getTime()),
        fill: false,
        borderColor: "rgba(234, 78, 53,1)",
        tension: 0.1,
      },
      {
        label: "2022",
        data: dates && dates.map((date) => new Date(date).getTime()),
        fill: false,
        borderColor: "rgba(234, 78, 53,1)",
        tension: 0.1,
      },
      {
        label: "2023",
        data: dates && dates.map((date) => new Date(date).getTime()),
        fill: false,
        borderColor: "rgba(234, 78, 53,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
          },
        },
      ],
    },
  };

  return (
    <>{repos ? <Line data={data} options={options} /> : <h3>Loading...</h3>}</>
  );
}

export default Chart;
