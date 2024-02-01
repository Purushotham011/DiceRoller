function rollDice()
{
    const nod=document.getElementById('numdice').value;
    const diceResult=document.getElementById('diceResult');
    const diceImage= document.getElementById('diceImage');
    const values = [];
    const images = [];

    for(let i=0;i<nod;i++)
    {
        const random = Math.floor(Math.random()*6)+1;
        values.push(random);
        images.push(`<img src="images/${random}.png" alt='images${random}'>`);
    }

    diceResult.textContent = `dice : ${values.join(',')}`;
    diceImage.innerHTML = images.join('');
}