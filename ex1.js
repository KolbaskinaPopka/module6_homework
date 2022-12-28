let array = [
  "hello",
  12,
  13,
  14,
  15,
  16,
  18,
  "19",
  { a: "1", b: 1 },
  ["hi"],
  "Bye",
  true,
];

function oddEvenLength() {
  let odd = 0;
  let even = 0;

  array.map((a) =>
    typeof a === "number" ? (a % 2 === 0 ? even++ : odd++) : a
  );

  console.log(odd, even);
}

oddEvenLength();