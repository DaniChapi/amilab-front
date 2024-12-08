import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale);

export const Char = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="w-full md:w-1/2">
        <Pie
          data={{
            labels: [
              "semana 1",
              "semena 2",
              "semana 3",
              "semana 4",
            ],
            datasets: [
              {
                data: [12000, 20000, 34000, 4000],
                label: "Values",
              },
            ],
          }}
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
