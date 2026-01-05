/* ROOT  */
document.body.style.margin = "0";
document.body.style.fontFamily = "Segoe UI, sans-serif";
document.body.style.display = "flex";
document.body.style.background = "linear-gradient(135deg, #fef9c3, #fda4af, #c7d2fe, #a5f3fc)";
document.body.style.backgroundSize = "400% 400%";
document.body.style.animation = "bgShift 25s ease infinite";

/* ANIMATIONS */
const style = document.createElement("style");
style.textContent = `
@keyframes fadeUp {
  0% {opacity:0; transform:translateY(30px);}
  50% {opacity:0.5; transform:translateY(15px);}
  100% {opacity:1; transform:translateY(0);}
}

@keyframes slideIn {
  0% {opacity:0; transform:translateX(-120%);}
  50% {opacity:0.5; transform:translateX(-60%);}
  100% {opacity:1; transform:translateX(0);}
}

@keyframes bgShift {
  0% {background-position:0% 50%;}
  50% {background-position:100% 50%;}
  100% {background-position:0% 50%;}
}
`;
document.head.appendChild(style);

/* VERTICAL NAV */
const sideNav = document.createElement("div");
sideNav.style.cssText = `
  width:230px;
  background:linear-gradient(180deg,#0f172a,#020617);
  color:white;
  min-height:100vh;
  padding:20px;
  animation: slideIn 0.6s ease;
`;

const menuBtn = document.createElement("div");
menuBtn.textContent = "☰ Menu";
menuBtn.style.cssText = `
  padding:12px;
  background:#1e293b;
  text-align:center;
  cursor:pointer;
  border-radius:8px;
  margin-bottom:15px;
  transition:0.3s;
`;
menuBtn.onmouseover = () => menuBtn.style.background = "#5395f0ff";
menuBtn.onmouseout = () => menuBtn.style.background = "#5c81bcff";

sideNav.appendChild(menuBtn);

const menuList = document.createElement("div");
menuList.style.display = "none";

const pages = ["Home", "Service", "About Us", "Content"];

pages.forEach(p => {
  const link = document.createElement("div");
  link.textContent = p;
  link.style.cssText = `
    padding:12px;
    margin-bottom:8px;
    border-radius:6px;
    cursor:pointer;
    transition:0.3s;
  `;
  link.onmouseover = () => link.style.background = "#334155";
  link.onmouseout = () => link.style.background = "";
  link.onclick = () => showPage(p);
  menuList.appendChild(link);
});

menuBtn.onclick = () => {
  menuList.style.display =
    menuList.style.display === "none" ? "block" : "none";
};

sideNav.appendChild(menuList);
document.body.appendChild(sideNav);

/*  MAIN */
const main = document.createElement("div");
main.style.cssText = `flex:1; display:flex; flex-direction:column;`;
document.body.appendChild(main);

/* HEADER  */
const header = document.createElement("div");
header.style.cssText = `
  background:linear-gradient(90deg,#facc15,#f97316,#6366f1);
  color:white;
  padding:20px;
  text-align:center;
  font-size:22px;
  font-weight:bold;
  box-shadow:0 4px 10px rgba(0,0,0,0.2);
`;
header.textContent = "JavaScript project";
main.appendChild(header);

/*  TOP NAV  */
const topNav = document.createElement("div");
topNav.style.cssText = `
 background:#e0f2fe;
  padding:15px;
  display:flex;
  justify-content:center;
  gap:25px;
  box-shadow:0 4px 10px rgba(0,0,0,0.1);
  border-radius:12px;
  margin:15px;
`;


pages.forEach(p => {
  const btn = document.createElement("button");
  btn.textContent = p;
  btn.style.cssText = `
    padding:10px 18px;
    border:none;
    border-radius:20px;
    background:white;
    cursor:pointer;
    transition:0.3s;
  `;
  btn.onmouseover = () => {
    btn.style.background = "#f7c55aff";
    btn.style.color = "white";
  };
  btn.onmouseout = () => {
    btn.style.background = "white";
    btn.style.color = "black";
  };
  btn.onclick = () => showPage(p);
  topNav.appendChild(btn);
});
main.appendChild(topNav);

/*  CONTENT  */
const content = document.createElement("div");
content.style.cssText = `
   flex:1;
  padding:50px;
  display:flex;
  justify-content:center;
  animation: fadeUp 0.5s ease;
   box-shadow:0 4px 10px rgba(0,0,0,0.2);
`;
main.appendChild(content);

/*  FOOTER */
const footer = document.createElement("footer");
footer.style.cssText = `
  position:fixed;
  bottom:0;
  left:230px;
  right:0;
  background:#020617;
  color:white;
  padding:15px;
  text-align:center;
  box-shadow:0 -3px 10px rgba(0, 0, 0, 0.3);
  font-size:14px;
`;
footer.innerHTML = `
  <b>JavaScript  Project</b><br>
  © 2025 – prepared by maria shariif
`;
document.body.appendChild(footer);

/*  PAGE SWITCH  */
function showPage(page) {
  content.innerHTML = "";
  if (page === "Home") homePage();
  if (page === "Service") servicePage();
  if (page === "About Us") aboutPage();
  if (page === "Content") contactPage();
}

/*  HOME */
function homePage() {
  const box = document.createElement("div");
  box.style.cssText = `
    background:linear-gradient(135deg,#f0f9ff,#ffffff);
    padding:50px;
    max-width:700px;
    border-radius:22px;
    box-shadow:0 15px 30px rgba(0,0,0,0.15);
    animation: fadeUp 0.5s ease;
    text-align:center;
  `;

  box.innerHTML = `
    <h1 style="
      color:#0284c7;
      font-size:40px;
      margin-bottom:20px;
      font-weight:700;
    ">
      Ku Soo Dhawoow
    </h1>

    <p style="
      font-size:18px;
      color:#334155;
      margin-bottom:30px;
    ">
      Website-kaan waxaad ka heli doontaa xog kala duwan,  
      dhammaan links-kana adigaa dooranaya.
    </p>

    <h2 style="
      font-size:34px;
      font-weight:800;
      color:#0f172a;
      text-align:center;
      letter-spacing:2px;
    ">
      WELCOME MAIN PAGE
    </h2>
  `;

  content.appendChild(box);
}




/*  SERVICE PAGE  */
function servicePage() {
  showChapters();
}

/*  SHOW CHAPTERS */
function showChapters() {
  content.innerHTML = "";

  const box = createBox("Three Chapters");

  [7, 8, 9].forEach(ch => {
    const btn = createBtn("Chapter " + ch, "#38bdf8", () => {
      showExamples(ch);
    });
    box.appendChild(btn);
  });

  content.appendChild(box);
}

/* SHOW EXAMPLES */
function showExamples(chapter) {
  content.innerHTML = "";

  const box = createBox(`Chapter ${chapter} Examples`);
  const examples = getExamples(chapter);

  examples.forEach(ex => {
    const btn = createBtn(ex.title, "#e0f2fe", () => {
      showExampleBox(ex, chapter);
    }, "#0284c7");
    box.appendChild(btn);
  });

  box.appendChild(
    createBtn(" Back to Chapters", "#0284c7", showChapters)
  );

  content.appendChild(box);
}

/* SHOW SINGLE EXAMPLE  */
function showExampleBox(example, chapter) {
  content.innerHTML = "";

  const box = createBox(example.title);

  const pre = document.createElement("pre");
  pre.textContent = example.code;
  pre.style.cssText = `
    background:#020617;
    color:#e0f2fe;
    padding:16px;
    border-radius:10px;
    overflow-x:auto;
  `;
  box.appendChild(pre);

  const output = document.createElement("div");
  output.style.cssText = `
    margin-top:12px;
    padding:12px;
    background:#e0f2fe;
    border-radius:8px;
    font-weight:bold;
    white-space:pre-wrap;
  `;
  output.textContent = "Output will appear here";

  const runBtn = createBtn(" Run Code", "#22c55e", () => {

    const originalLog = console.log;
    console.log = function (...args) {
      output.textContent += args.join(" ") + "\n";
      originalLog.apply(console, args);
    };

    output.textContent = ""; 

    try {
      eval(example.code);
    } catch (e) {
      output.textContent = "Error: " + e.message;
    }

    console.log = originalLog; 
  });

  box.append(runBtn, output);

  box.appendChild(
    createBtn(" Back to Examples", "#facc15", () => {
      showExamples(chapter);
    })
  );

  content.appendChild(box);
}

/* chapters  */
function getExamples(ch) {
  if (ch === 7) {
    return [

   {
        title: "Example 2: Object vs Variables",
        code: `let student = {
  name: "Ali",
  age: 20,
  grade: "A"
};
console.log(student.name);`,
        run: () => "Ali"
      },

      {
        title: "Example 3: Object Literal Notation",
        code: `let car = {
  brand: "Toyota",
  year: 2022,
  color: "White"
};
console.log(car.brand);`,
        run: () => "Toyota"
      },

      {
        title: "Example 4: Constructor Function",
        code: `function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}
let student1 = new Student("Ali", 20, "A");
let student2 = new Student("Amina", 19, "B");
console.log(student1, student2);`,
        run: () => "Ali (A), Amina (B)"
      },

      {
        title: "Example 5: Role of this",
        code: `function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}
let car1 = new Car("Toyota", 2020);
let car2 = new Car("BMW", 2023);
console.log(car1.brand, car2.brand);`,
        run: () => "Toyota, BMW"
      },

      {
        title: "Example 6: ES6 Class Syntax",
        code: `class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}
let car1 = new Car("Toyota", 2021);
console.log(car1);`,
        run: () => "Car { brand: 'Toyota', year: 2021 }"
      },

      {
        title: "Example 7: Dot Notation",
        code: `let student = { name: "Ali", age: 20 };
console.log(student.name, student.age);`,
        run: () => "Ali, 20"
      },

      {
        title: "Example 8: Bracket Notation",
        code: `let student = { name: "Ali", age: 20 };
console.log(student["name"], student["age"]);`,
        run: () => "Ali, 20"
      },

      {
        title: "Example 9: Modify Properties",
        code: `let student = { name: "Ali", age: 20 };
student.age = 21;
student.name = "Ahmed";
console.log(student);`,
        run: () => "Ahmed, 21"
      },

      {
        title: "Example 10: Add New Properties",
        code: `let student = { name: "Ali", age: 20 };
student.phone = "0612345678";
student.nationality = "Somali";
console.log(student);`,
        run: () => "Properties added"
      },

      {
        title: "Example 11: Object Method",
        code: `let student = {
  name: "Ali",
  greet() {
    return "Hello, my name is " + this.name;
  }
};
console.log(student.greet());`,
        run: () => "Hello, my name is Ali"
      },

      {
        title: "Example 12: for...in Loop",
        code: `let student = { name: "Ali", age: 20, grade: "A" };
for (let key in student) {
  console.log(key, student[key]);
}`,
        run: () => "Looped through object"
      },

      {
        title: "Example 13: Object.entries()",
        code: `let student = { name: "Ali", age: 20 };
for (let [k,v] of Object.entries(student)) {
  console.log(k, v);
}`,
        run: () => "Entries listed"
      },

      {
        title: "Example 14: Object.values()",
        code: `let student = { name: "Ali", age: 20 };
console.log(Object.values(student));`,
        run: () => "Ali, 20"
      },

      {
        title: "Example 15: Object.keys()",
        code: `let student = { name: "Ali", age: 20 };
console.log(Object.keys(student));`,
        run: () => "name, age"
      },

      {
        title: "Example 16: JSON.stringify",
        code: `let student = { name: "Ali", age: 20 };
let jsonData = JSON.stringify(student);
console.log(jsonData);`,
        run: () => '{"name":"Ali","age":20}'
      },

      {
        title: "Example 17: JSON.parse",
        code: `let jsonData = '{"name":"Ali","age":20}';
let student = JSON.parse(jsonData);
console.log(student.name);`,
        run: () => "Ali"
      }
    ]; 
}
 if (ch === 8) {
    return [
     {
      title: "Example 1: getElementById",
      code: `const p = document.createElement("p");
p.id = "content";
p.textContent = "Hello DOM";
document.body.appendChild(p);

const el = document.getElementById("content");
el.style.color = "blue";
console.log(el.textContent);`,
      run: () => "Hello DOM"
    },

    {
      title: "Example 2: getElementsByTagName",
      code: `const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.textContent = "One";
p2.textContent = "Two";
document.body.append(p1, p2);

const ps = document.getElementsByTagName("p");
console.log(ps.length);`,
      run: () => "2"
    },

    {
      title: "Example 3: getElementsByClassName",
      code: `const d1 = document.createElement("div");
const d2 = document.createElement("div");
d1.className = "box";
d2.className = "box";
document.body.append(d1, d2);

const boxes = document.getElementsByClassName("box");
console.log(boxes.length);`,
      run: () => "2"
    },

    {
      title: "Example 4: querySelector",
      code: `const p = document.createElement("p");
p.textContent = "Query";
document.body.appendChild(p);

console.log(document.querySelector("p").textContent);`,
      run: () => "Query"
    },

    {
      title: "Example 5: querySelector (class)",
      code: `const div = document.createElement("div");
div.className = "card";
div.textContent = "Card";
document.body.appendChild(div);

console.log(document.querySelector(".card").textContent);`,
      run: () => "Card"
    },

    {
      title: "Example 6: querySelectorAll",
      code: `const p1 = document.createElement("p");
const p2 = document.createElement("p");
document.body.append(p1, p2);

console.log(document.querySelectorAll("p").length);`,
      run: () => "2"
    },

    {
      title: "Example 7: innerHTML",
      code: `const div = document.createElement("div");
div.innerHTML = "<b>Bold</b>";
document.body.appendChild(div);

console.log(div.innerHTML);`,
      run: () => "<b>Bold</b>"
    },

    {
      title: "Example 8: textContent",
      code: `const p = document.createElement("p");
p.textContent = "Plain Text";
document.body.appendChild(p);

console.log(p.textContent);`,
      run: () => "Plain Text"
    },

    {
      title: "Example 9: setAttribute",
      code: `const a = document.createElement("a");
a.setAttribute("href", "https://google.com");
console.log(a.getAttribute("href"));`,
      run: () => "https://google.com"
    },

    {
      title: "Example 10: style property",
      code: `const div = document.createElement("div");
div.style.background = "red";
console.log(div.style.background);`,
      run: () => "red"
    },

    {
      title: "Example 11: createElement",
      code: `const h1 = document.createElement("h1");
h1.textContent = "Hello";
console.log(h1.tagName);`,
      run: () => "H1"
    },

    {
      title: "Example 12: remove()",
      code: `const p = document.createElement("p");
document.body.appendChild(p);
p.remove();
console.log("removed");`,
      run: () => "removed"
    },

    {
      title: "Example 13: removeChild",
      code: `const parent = document.createElement("div");
const child = document.createElement("p");
parent.appendChild(child);
parent.removeChild(child);
console.log(parent.children.length);`,
      run: () => "0"
    },

    {
      title: "Example 14: replaceChild",
      code: `const parent = document.createElement("div");
const oldEl = document.createElement("p");
const newEl = document.createElement("h2");
parent.appendChild(oldEl);
parent.replaceChild(newEl, oldEl);
console.log(parent.firstChild.tagName);`,
      run: () => "H2"
    },

    {
      title: "Example 15: insertBefore",
      code: `const parent = document.createElement("div");
const a = document.createElement("p");
const b = document.createElement("p");
parent.appendChild(b);
parent.insertBefore(a, b);
console.log(parent.firstChild === a);`,
      run: () => "true"
    },

    {
      title: "Example 16: Click Event",
      code: `const btn = document.createElement("button");
btn.onclick = () => console.log("clicked");
btn.click();`,
      run: () => "clicked"
    },

    {
      title: "Example 17: Input Event",
      code: `const input = document.createElement("input");
input.value = "Ali";
console.log(input.value);`,
      run: () => "Ali"
    },

    {
      title: "Example 18: Mouse Events",
      code: `const div = document.createElement("div");
div.onmouseover = () => console.log("hover");
div.onmouseover();`,
      run: () => "hover"
    }

  ];
}
  if (ch === 9) {
    return [
      {
        title: "Example 1: Click Event",
        code: `
const button = document.createElement("button");
button.innerText = "Click me";
document.body.appendChild(button);

const outputDiv = document.createElement("div");
outputDiv.style.marginTop = "10px";
document.body.appendChild(outputDiv);

function myFunction() {
  outputDiv.innerText = "Button clicked!";
}

button.addEventListener("click", myFunction);
        `,
        run: () => "Button clicked!"
      },
      {
        title: "Example 2: Inline Click Event",
        code: `
const button = document.createElement("button");
button.innerText = "Click me";

const outputDiv = document.createElement("div");
outputDiv.style.marginTop = "10px";
document.body.appendChild(button);
document.body.appendChild(outputDiv);

// inline onclick 
button.onclick = function () {
  outputDiv.innerText = "Button clicked!";
};
        `,
        run: () => "Button clicked!"
      },
      {
        title: "Example 3: Simple Hover Box",
        code: `
const box = document.createElement("div");
box.innerText = "Hover over me";

box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "black";
box.style.color = "white";

document.body.appendChild(box);
        `,
        run: () => "Hover over me"
      },
      {
        title: "Example 4: Mouseover & Mouseout",
        code: `
const element = document.createElement("div");
element.innerText = "Hover over me";

element.style.padding = "20px";
element.style.backgroundColor = "blue";
element.style.color = "white";
element.style.width = "100px";
element.style.height = "100px";
element.style.margin = "10px";

document.body.appendChild(element);

element.addEventListener("mouseover", function () {
  element.style.backgroundColor = "green";
});

element.addEventListener("mouseout", function () {
  element.style.backgroundColor = "blue";
});
        `,
        run: () => "Mouseover/Mouseout working"
      },
      {
        title: "Example 5: Focus & Blur",
        code: `
const input = document.createElement("input");
input.type = "text";
input.placeholder = "type something";

const outputDiv = document.createElement("div");
document.body.appendChild(input);
document.body.appendChild(outputDiv);

input.addEventListener("focus", function () {
  updateOutput("Element focused", "green");
});

input.addEventListener("blur", function () {
  updateOutput("Element blurred", "red");
});

function updateOutput(message, color) {
  outputDiv.innerText = message;
  outputDiv.style.color = color;
}
        `,
        run: () => "Focus/Blur working"
      },
      {
        title: "Example 6: Key Events",
        code: `
const input = document.createElement("input");
input.type = "text";
input.placeholder = "type something";

const outputDiv = document.createElement("div");
document.body.appendChild(input);
document.body.appendChild(outputDiv);

input.addEventListener("keydown", function (event) {
  outputDiv.innerText = "keydown: " + event.key;
});

input.addEventListener("keypress", function (event) {
  outputDiv.innerText += "\\nkeypress: " + event.key;
});

input.addEventListener("keyup", function (event) {
  outputDiv.innerText += "\\nkeyup: " + event.key;
});
        `,
        run: () => "Key events working"
      },
      {
        title: "Example 7: Form Submit & Input",
        code: `
const form = document.createElement("form");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "type something";

const button = document.createElement("button");
button.type = "submit";
button.innerText = "Submit";

const outputDiv = document.createElement("div");
outputDiv.style.marginTop = "10px";

form.appendChild(input);
form.appendChild(button);
document.body.appendChild(form);
document.body.appendChild(outputDiv);

input.addEventListener("input", function () {
  if (input.value !== "") {
    updateOutput("Input changed with value!", "green");
  } else {
    updateOutput("Text Input is empty!", "red");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  updateOutput("Form submitted!", "green");
});

function updateOutput(message, color) {
  outputDiv.innerText = message;
  outputDiv.style.color = color;
}
        `,
        run: () => "Input changed! / Form submitted!"
      },
      {
        title: "Example 8: Click Delegation on List",
        code: `
const listPa = document.createElement("ul");
listPa.id = "parentlist";
const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

items.forEach(function (text) {
  const listIt = document.createElement("li");
  listIt.innerText = text;

  listIt.style.display = "inline-block";
  listIt.style.marginRight = "10px";
  listIt.style.padding = "5px";
  listIt.style.backgroundColor = "#eee";
  listIt.style.cursor = "pointer";

  listIt.addEventListener("mouseover", function () {
    listIt.style.backgroundColor = "#ddd";
  });

  listIt.addEventListener("mouseout", function () {
    listIt.style.backgroundColor = "#eee";
  });

  listPa.appendChild(listIt);
});

document.body.appendChild(listPa);

listPa.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert("Clicked on: " + event.target.innerText);
  }
});
        `,
        run: () => "Click delegation working"
      }
    ];
  }

  return [];
}


/* function */
function createBox(title) {
  const box = document.createElement("div");
  box.style.cssText = `
    background:white;
    padding:40px;
    max-width:700px;
    border-radius:20px;
  `;
  box.innerHTML = `<h2 style="color:#0284c7;">${title}</h2>`;
  return box;
}

function createBtn(text, bg, action, color = "white") {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.style.cssText = `
    width:100%;
    padding:14px;
    margin-top:12px;
    background:${bg};
    color:${color};
    border:none;
    border-radius:10px;
    cursor:pointer;
    font-weight:bold;
  `;
  btn.onclick = action;
  return btn;
}

/*  ABOUT US */
function aboutPage() {
  content.innerHTML = "";

  const card = document.createElement("div");
  card.style.cssText = `
    background:linear-gradient(135deg,#f0f9ff,#e0f2fe);
    padding:45px;
    max-width:680px;
    border-radius:28px;
    text-align:center;
    color:#0f172a;
    box-shadow:0 20px 35px rgba(2,132,199,0.25);
    animation:fadeUp 0.6s ease;
  `;

  card.innerHTML = `
    <img src="maria.jpg" style="
      width:140px;
      height:140px;
      border-radius:50%;
      border:5px solid #38bdf8;
      box-shadow:0 8px 18px rgba(0,0,0,0.2);
      margin-bottom:15px;
    ">

    <h2 style="color:#0284c7; font-size:26px; margin-bottom:5px;">
      Maryama Shariif Mohamed
    </h2>

    <p style="color:#475569; font-weight:500;">ID: CS1500953</p>

    <div style="
      margin:18px 0;
      padding:18px;
      background:white;
      border-radius:18px;
      box-shadow:0 8px 18px rgba(0,0,0,0.1);
    ">
      <p> <b>Phone:</b> 614855347</p>
      <p> <b>Email:</b> maryamashariif31@gmail.com</p>
      <p> <b>University:</b> Jazeera University</p>
      <p> <b>Skills:</b> HTML, CSS, JavaScript</p>
    </div>

    <div style="margin-top:20px;">
      <a href="https://ibsbank.so/" target="_blank" style="
        text-decoration:none;
        padding:10px 20px;
        background:#0284c7;
        color:white;
        border-radius:20px;
        margin-right:12px;
        box-shadow:0 5px 12px rgba(2,132,199,0.4);
      ">
        IBS Bank
      </a>

      <a href="https://amanabank.so/" target="_blank" style="
        text-decoration:none;
        padding:10px 20px;
        background:#0ea5e9;
        color:white;
        border-radius:20px;
        box-shadow:0 5px 12px rgba(14,165,233,0.4);
      ">
        AMANA Bank
      </a>
    </div>
  `;

  content.appendChild(card);
}

/* CONTACT  */
function contactPage() {
  content.innerHTML = "";
  
  const box = document.createElement("div");
  box.style.cssText = `
    background:linear-gradient(135deg,#e0f2fe,#fefeff);
    padding:32px;
    max-width:680px;
    border-radius:22px;
    box-shadow:0 14px 30px rgba(2,132,199,0.2);
    margin:25px auto;
    font-family: Arial, sans-serif;
  `;

  box.innerHTML = `
    <h2 style="
      text-align:center;
      color:#0284c7;
      margin-bottom:20px;
      font-size:28px;
    ">
      Contact Us
    </h2>

    <form id="contactForm">
      <label>Name</label>
      <input type="text" required placeholder="Enter your name"
        style="width:100%; padding:10px; margin:6px 0 14px;
        border-radius:10px; border:2px solid #bae6fd; outline:none;">

      <label>Email</label>
      <input type="email" required placeholder="Enter your email"
        style="width:100%; padding:10px; margin:6px 0 14px;
        border-radius:10px; border:2px solid #bae6fd; outline:none;">

      <label>Message</label>
      <textarea rows="4" required placeholder="Type your message"
        style="width:100%; padding:10px; margin:6px 0 18px;
        border-radius:10px; border:2px solid #bae6fd; outline:none;">
      </textarea>

      <button type="submit" style="
        width:100%;
        padding:12px;
        border:none;
        border-radius:14px;
        background:linear-gradient(135deg,#38bdf8,#0284c7);
        color:white;
        font-size:16px;
        font-weight:600;
        cursor:pointer;
        box-shadow:0 6px 15px rgba(2,132,199,0.4);
      ">
        Send Message
      </button>
    </form>
  `;

  content.appendChild(box);


}
/*  DEFAULT  */
showPage("Home");