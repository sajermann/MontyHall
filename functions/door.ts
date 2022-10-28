import DoorModel from "../model/DoorModel";

export function createDoors(quantity: number, selected: number): DoorModel[]{
  return Array.from({length: quantity}, (_,i)=> {
    const numberTem = i + 1;
    const hasPresent = numberTem === selected
    return new DoorModel(numberTem, hasPresent)
  })
}