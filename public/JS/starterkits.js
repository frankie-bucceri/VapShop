const createCards = (starterkitsArr) => {
    const parent = document.getElementById('append-here');

    starterkitsArr.forEach((starterkitsObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = starterkitsObj.name;

        const starterkitsImg = document.createElement('img');
        starterkitsImg.src = starterkitsObj.img;
        starterkitsImg.classList.add('test-image');

        container.appendChild(starterkitsImg);
        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to cart';
        addToCartBtn.onclick = () => addToCart(starterkitsObj)

        const actionBtnContainer = document.createElement('div');
        actionBtnContainer.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        const removeFromCartBtn = document.createElement('button');
        removeFromCartBtn.innerText = 'Remove';
        removeFromCartBtn.onclick = () => removeFromCart(starterkitsObj)

        const actionBtnContainer2 = document.createElement('div');
        actionBtnContainer2.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        actionBtnContainer.appendChild(addToCartBtn)
        actionBtnContainer.appendChild(removeFromCartBtn)

        container.appendChild(actionBtnContainer);

        parent.appendChild(container)
    })

}

$.ajax({
    url: 'http://localhost:8001/starterkits',
    method: 'GET',
    success: function(tanks) {
        createCards(tanks);
    }
})
function logout(){
    location.replace('./login.html')
}