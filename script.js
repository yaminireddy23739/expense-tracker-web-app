const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const addBtn = document.getElementById("add-btn");
const expenseList = document.getElementById("expense-list");
const totalAmountEl = document.getElementById("total-amount");
const emptyMessage = document.getElementById("empty-message");

let total = 0;

addBtn.addEventListener("click", () => {
    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);

    if (name === "" || amount <= 0) {
        alert("Enter valid expense details");
        return;
    }

    emptyMessage.style.display = "none";

    const li = document.createElement("li");
    li.innerHTML = `
        ${name} - ₹${amount}
        <button class="delete-btn">X</button>
    `;

    expenseList.appendChild(li);

    total += amount;
    totalAmountEl.textContent = total;

    li.querySelector(".delete-btn").addEventListener("click", () => {
        expenseList.removeChild(li);
        total -= amount;
        totalAmountEl.textContent = total;

        if (expenseList.children.length === 0) {
            emptyMessage.style.display = "block";
        }
    });

    expenseName.value = "";
    expenseAmount.value = "";
});
