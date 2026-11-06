function calculateLove() {

    let name1 = document.getElementById('name1').value.trim();

    let name2 = document.getElementById('name2').value.trim();

    // Check whether names are entered
    if (name1 === "" || name2 === "") {

        alert("Please enter both names!");

        return;
    }

    // Generate random love percentage
    let love = Math.floor(Math.random() * 101);

    console.log(love);

    // Display the result
    document.getElementById('result').innerHTML =
        name1 + " ❤️ " + name2 + " = " + love + "%";

}