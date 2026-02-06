// 1. get the local storage if there is a local storage if not then make one
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// 2. Catch dom element HTML
const addExpenses = document.getElementById("add-expense");
const filterByDate = document.getElementById("date-filter");
const descForm = document.getElementById("description");
const priceForm = document.getElementById("price");
const cateForm = document.getElementById("category");
const dateForm = document.getElementById("date-input");

//3. Prevent user to input date beyond today
const today = new Date().toLocaleDateString("en-CA");

document.getElementById("date-input").max = today;

// 4. Call function to show expenses
showExpenses();
countTotal();


// 5. add expense function
addExpenses.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const descValue = descForm.value.trim();
    const priceValue = priceForm.value.trim();
    const cateValue = cateForm.value.trim();
    const dateValue = dateForm.value.trim();

    if (descValue === "" || priceValue === "" || cateValue === "" || dateValue === "") {
        alert("Field can't be empty");
        return;
    }

    const expense = {
        description: descValue,
        price: priceValue,
        category: cateValue,
        date: dateValue
    };

    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    showExpenses();
    countTotal();

})


//6. Function to show expense on website
function showExpenses() {
    const container = document.getElementById("expenses-container");

    if (expenses.length === 0) {
        container.innerHTML = `
        <p class="flex flex items-center justify-center" id="empty-message">
          No expenses yet. Add your first expense above!
        </p>`;
        return;
    }

    let tableHTML = `
        <table class="w-full border-collapse">
        <thead>
            <tr class="border-b">
            <th class="py-2 text-left">Description</th>
            <th class="py-2 text-left">Price</th>
            <th class="py-2 text-left">Category</th>
            <th class="py-2 text-left">Date</th>
            </tr>
        </thead>
        <tbody>
    `

    expenses.forEach((item, index) => {
        tableHTML += `
        <tr class="border-b">
            <td class="py-2">${item.description}</td>
            <td class="py-2">\$ ${Number(item.price).toLocaleString()}</td>
            <td class="py-2">${item.category}</td>
            <td class="py-2">${item.date}</td>
        </tr>
        `;
    });

    tableHTML += `
        </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
}

//7. function to count total and show it
function countTotal() {
    const total = document.getElementById("total-price");
    let priceCount = 0;

    expenses.forEach((item, index) =>{
        priceCount += Number(item.price);
    })

    if (priceCount === 0) {
        total.innerHTML = `no data yet`
    } else {
        total.innerHTML = `Total: \$${priceCount}`;
    }
}