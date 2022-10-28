import { useState } from "react";
import Door from "../components/Door";
import Present from "../components/Present";
import { createDoors } from "../functions/door";
import DoorModel from "../model/DoorModel";

export default function Home() {
  const [p1, setP1] = useState(new DoorModel(1))
  const [p2, setP2] = useState(new DoorModel(2))
  const [p3, setP3] = useState(new DoorModel(3))

console.log(createDoors(3, 2))

  return (
    <div style={{display: 'flex'}}>
      {/* <Present /> */}
      <Door value={p1} onChange={n =>setP1(n)} />
      <Door value={p2} onChange={n =>setP2(n)} />
      <Door value={p3} onChange={n =>setP3(n)} />
      
    </div>
  )
}
