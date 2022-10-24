import data from "../../data/data.json";
const dataLength = data.length;

export const theme = Object.freeze({
  colors: {
    bgcMain: 'aliceblue',
    bgcCard: 'white',
    bgcList: 'lightgrey',
    secondTextColor: 'grey',
    border: 'lightslategray',

    statusOk: 'green',
    statusNotOk: 'red',

    tableHead: 'lightblue',
  },
  foo: {
    widthOfItemSection: () => `${100 / dataLength}%`,
    changeBgc: () => `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  }
});