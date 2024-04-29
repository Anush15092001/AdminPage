import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement
  } from "chart.js";
import { Line,Doughnut } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement
  );

function Dash({toogle}){
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text:"Annual Product Sales"
          },
          tooltip: {
            intersect: false,
            backgroundColor: "blue",
            displayColors: false,
            padding: 20,
            caretSize: 10,
            caretPadding: 12,
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            grid: {
              display: false,
            },
          },
        },
        elements: {
          line: {
            borderWidth: 2,
          },
          point: {
            radius: 4,
            hoverRadius: 6,
          },
        },
      };
   const donoptions={
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text:"Single Product Sales"
      },
      tooltip: {
        intersect: false,
        padding: 20,
        caretSize: 10,
        caretPadding: 12,
      },},
    scales: {
        x: {
          display: false,
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
          grid: {
            display: false,
          },
        },
      },
      elements: {
        line: {
          borderWidth: 2,
        },
        point: {
          radius: 4,
          hoverRadius: 6,
        },
      },
   }
    return (
      <div className={`${toogle ? "left-0" : "w-full"} m-2 mt-[100px] grid md:grid-cols-1 sm:grid-cols-1 bg-scroll`}>
      <div className="flex gap-2 flex-col md:flex-row sm:flex-col overflow-y-auto">
      <div className="w-screen h-[500px] border border-gray-500 shadow-lg rounded rounded-lg ">
      <Line className="flex justify-center mt-2"
        options={options} 
        data={{
          labels:  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
          datasets: [
            {
              id: 1,
              label: 'No Of Products Sold',
              data: [5000, 8000, 12000, 10000, 3000, 16000, 19000, 13000, 11000, 25000, 22000, 19000],
              backgroundColor: "blue",
              borderColor: "blue"
            }
          ]
        }} 
      />
    </div>
    <div className="w-screen h-[500px] border border-gray-500 shadow-lg rounded rounded-lg">
      <Doughnut className="place-items-center mt-2"
        options={donoptions}
        data={{
          labels: ["Mens Clothing", "Womens Clothing", "Electronics", "Jewelry"],
          datasets: [
            {
              id: 2,
              label: "Products Sold",
              data: [10000, 3000, 22000, 9000],
              backgroundColor: ['orange', 'red', 'blue', 'yellow'],
              hoverOffset: 4
            }
          ]
        }} 
      />
    </div>
  </div>
</div>
    );
}

export default Dash;
