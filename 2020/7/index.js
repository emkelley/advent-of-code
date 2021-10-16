let a = {};
document.body.innerText
  .trim()
  .split("\n")
  .forEach(
    (r) =>
      (a[r.split(" contain ")[0].split(" bag")[0]] = r
        .split(" contain ")[1]
        .split(", ")
        .map((c) =>
          c == "no other bags."
            ? null
            : [parseInt(c.substr(0, 1)), c.substr(2).split(" bag")[0]]
        ))
  );

let c = (b) =>
  b === "shiny gold"
    ? true
    : a[b][0]
    ? a[b].reduce((r, d) => r || c(d[1]), false)
    : false;
Object.keys(a).filter(c).length - 1;

// part 2
let c2 = (b) =>
  a[b][0] ? 1 + a[b].reduce((r, d) => r + d[0] * c2(d[1]), 0) : 1;
c2("shiny gold") - 1;
