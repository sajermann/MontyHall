import DoorModel from "../model/DoorModel";

export function createDoors(quantity: number, selected: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    const numberTem = i + 1;
    const hasPresent = numberTem === selected;
    return new DoorModel(numberTem, hasPresent);
  });
}

export function updateDoors(doors: DoorModel[], doorModified: DoorModel): DoorModel[] {
  return doors.map(currenDoor => {
      const equalToModified = currenDoor.number === doorModified.number

      if(equalToModified) {
          return doorModified
      } else {
          return doorModified.isOpened ? currenDoor : currenDoor.unselect()
      }
  })
}