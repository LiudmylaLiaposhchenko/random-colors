import getRandomColor from "@/utils/getRandomColor";
import Main from "./Main";

export default function Home() {
  const colors = [
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ];

  return <Main defaultColors={colors} />
}
