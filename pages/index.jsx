import Door from "../components/Door";
import Present from "../components/Present";

export default function Home() {
  return (
    <div style={{display: 'flex'}}>
      {/* <Present /> */}
      <Door selected />
      <Door />
    </div>
  )
}
