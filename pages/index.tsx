import { useState } from "react";
import Door from "../components/Door";
import Present from "../components/Present";
import DoorModel from "../model/DoorModel";

export default function Home() {
  const [p1, setP1] = useState(new DoorModel(1))

  return (
    <div style={{display: 'flex'}}>
      {/* <Present /> */}
      <Door value={p1} onChange={n =>setP1(n)} />
      
    </div>
  )
}
