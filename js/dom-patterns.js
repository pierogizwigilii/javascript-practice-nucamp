function showPattern() {
    const colorsArr = ["orange", "pink", "green", "white", "yellow", "blue", "violet"];

    let topPosition = 23;
    let leftPosition = 25;
    let width = 500;
    let height = 500;

    while (width > 50) { //making sure there's no infinite loop
        const randomColorIdx = Math.floor(Math.random() * colorsArr.length); //setting to random index
        const newDiv = document.createElement('div');

        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.background = colorsArr[randomColorIdx];

        document.body.appendChild(newDiv);

        topPosition += 10;
        leftPosition += 10;
        width -= 20;
        height -= 20;
    }
}