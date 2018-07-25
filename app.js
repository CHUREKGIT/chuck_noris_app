//Grap button
document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e){
    
    //checking if this is form is empty

    if(document.getElementById('input').value === ''){
        
        const alert = 'Wpisz ilość DŻOŁKóW!'

        document.getElementById('alert').className = 'alert'

        document.getElementById('alert').innerHTML = `
        <p>${alert}</p>
        `


    } else {
        const number = document.getElementById('input').value

        const xhr = new XMLHttpRequest();

        xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

        xhr.onload = function() {
            if(this.status === 200){
                const response = JSON.parse(this.responseText);
                
                let output = '';

                if(response.type === 'success') {

                    response.value.forEach(function(joke){
                        output += `<li>${joke.joke}</li>`;
                });

                } else {
                    output += '<li>Bład. NIe nasz!!!</li>'
                }

                document.querySelector('.jokes').innerHTML = output;

            }
        }


        xhr.send();

        console.log(xhr)


    }
    
    
   




    e.preventDefault();
}