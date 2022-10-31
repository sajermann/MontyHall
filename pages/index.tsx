import { useState } from "react";
import Door from "../components/Door";
import Present from "../components/Present";
import { createDoors, updateDoors } from "../functions/door";
import DoorModel from "../model/DoorModel";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(3, 2));

  function renderDoors() {
    return doors.map((door) => (
      <Door
        key={door.number}
        value={door}
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    ));
  }

  return <div style={{ display: "flex" }}>{renderDoors()}</div>;
}
