const createCards = (premiumArr) => {
    const parent = document.getElementById('append-here');

    premiumArr.forEach((premiumObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = premiumObj.name

        const premiumImg = document.createElement('img');
        premiumImg.src = premiumObj.img;
        premiumImg.classList.add('test-image');

        container.appendChild(premiumImg);
        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to cart';
        addToCartBtn.onclick = () => addToCart(premiumObj)

        const actionBtnContainer = document.createElement('div');
        actionBtnContainer.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        const removeFromCartBtn = document.createElement('button');
        removeFromCartBtn.innerText = 'Remove';
        removeFromCartBtn.onclick = () => removeFromCart(premiumObj)

        const actionBtnContainer2 = document.createElement('div');
        actionBtnContainer2.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        actionBtnContainer.appendChild(addToCartBtn)
        actionBtnContainer.appendChild(removeFromCartBtn)

        container.appendChild(actionBtnContainer)

        parent.appendChild(container)
    })

}

// createCards();
$.ajax({
    url: 'http://localhost:8001/premium',
    method: 'GET',
    success: function (premium) {
        createCards(premium);
    }
})

//logout();
function logout() {
    location.replace("./login.html");
}