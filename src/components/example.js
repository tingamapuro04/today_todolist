export const todos = [
  {
    title: "Title",
    desc: "Desi",
    date: "2023-09-20",
    _id: "c4a106e7-eb03-4a05-81ed-26d170622563",
  },
  {
    title: "Second",
    desc: "This is the second item",
    date: "2023-09-20",
    _id: "98ab549c-3a2d-4165-a42a-6b574bdaa106",
  },
  {
    title: "Third",
    desc: "This is the third one",
    date: "2023-09-21",
    _id: "10a547a7-4851-42cc-9761-2a829503e94f",
  },
  {
    title: "Fourth",
    desc: "This is the fourth one yawa",
    date: "2023-09-22",
    _id: "125b80dc-9164-4195-8098-a3b9dd9db7af",
  },
  {
    title: "Fifth",
    desc: "This is the last one as per now. I'm not promising that ati hii ndo ya mwisho kabisa",
    date: "2023-09-23",
    _id: "94639a28-eb86-429c-93c8-ecbf07821327",
  },
];

const todo = todos.find((tog) => tog._id === "125b80dc-9164-4195-8098-a3b9dd9db7af");
const todo_index = todos.findIndex(
  (tog) => tog._id === "125b80dc-9164-4195-8098-a3b9dd9db7af"
);
let update = {
  title: "Updated Title",
  desc: "Updated desc",
  date: "18/09/2023",
  _id: "125b80dc-9164-4195-8098-a3b9dd9db7af"
};

todos[todo_index] = update;
// console.log(todos[todo_index]);


const date = new Date();
const todoDate = new Date("2023-09-27");


const options = { year: "numeric", month: "2-digit", day: "2-digit" };

const today = date.toLocaleDateString("en-US", options);
const formatted = new Date("2023-09-27").toLocaleDateString("en-US", options);
console.log(today);
console.log(formatted === today);
