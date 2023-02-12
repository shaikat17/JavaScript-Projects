const imposterBox = `box-${Math.floor(Math.random() * 9) + 1}`;

const points = document.getElementById('points');
let count = parseInt(points.innerText);

const result = document.getElementById('result');

const allBoxes = document.getElementsByClassName('box');


for (const allBox of allBoxes) {
    allBox.addEventListener('click', function() {
        if(this.classList.contains(imposterBox)) {
            console.log("success");
            this.style.backgroundImage = "url('yes.gif')";
            points.innerText = count+1;
            result.innerText = `Congratulation!! you succeed in ${count+1} try`
        }
        else {
            console.log("You failed");
            this.style.backgroundImage = "url('no.gif')";
            count++;
            points.innerText = count;
        }
    })
}