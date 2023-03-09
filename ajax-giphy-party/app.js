const apiKey = '6Zx1nXOVscWTexNVGagLjPTpCG8N3wG6';
const searchForm = document.querySelector('#searchform');
const input = document.querySelector('#search');
const gifDiv = document.querySelector('#gifDiv');
const resetButton = document.querySelector('#reset');

async function searchGif(tag) {
   const res = await axios.get('https://api.giphy.com/v1/gifs/random', {
      params: { apiKey, tag },
   });
   const gifURL = res.data.data.images.original.url;
   const newCard = document.createElement('div');
   newCard.innerHTML = `<div class="card m-4 p-4" >   <img src="${gifURL}" class="card-img-top" alt="..." id="gif" /></div>`;
   console.log(newCard);
   gifDiv.append(newCard);
}
searchForm.addEventListener('submit', function (e) {
   e.preventDefault();
   searchGif(input.value);
   input.value = '';
});

resetButton.addEventListener('click', function (e) {
   e.preventDefault();
   gifDiv.innerHTML = '';
});
