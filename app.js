const apiKey = "b1d116324b9c40c1feb14896"
const url = "https://v6.exchangerate-api.com/v6/" + apiKey

// elements
const currencyOne = document.getElementById("currencyOne")
const currencyTwo = document.getElementById("currencyTwo")
const listOne = document.getElementById("listOne")
const listTwo = document.getElementById("listTwo")
const amount = document.getElementById("amount")
const calculate = document.getElementById("calculate")
const result = document.getElementById("result")

fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes;

        let options;
        items.forEach(item => {
            options += `<option value="${item[0]}">${item[1]}</option>`         
        });

        listOne.innerHTML = options;
        listTwo.innerHTML = options;
    })

calculate.addEventListener("click", () =>{
    const doviz1 = currencyOne.value
    const doviz2 = currencyTwo.value
    const miktar = amount.value

    fetch(url + "/latest/" + doviz1)
        .then(res => res.json())
        .then(data =>{
            const sonuc = (data.conversion_rates[doviz2] * miktar).toFixed(3);
            result.innerHTML = `
                <div class="card border-primary">
                    <div class="card-body text-center" style="font-size: 30px;">
                        ${miktar} ${doviz1} = ${sonuc} ${doviz2}
                    </div>
                </div>
            `
        })
})