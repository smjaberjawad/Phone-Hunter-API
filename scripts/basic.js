const loadData = async (searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const json = await response.json();
    const phones = json.data;
    displayPhones(phones);
}

const displayPhones = phones => {

    const phoneContainer = document.getElementById('phone_container');
    phoneContainer.innerText = '';

    phones.forEach(phone => {

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-base-100 shadow-xl border-2 border-gray-500 rounded-3xl m-auto`
        phoneCard.innerHTML = `
        <figure class="mt-10"><img src="${phone.image}" alt="Shoes" />
        </figure>
        <div class="card-body flex justify-center items-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
        </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard);

    });

    loadingBar(false);

}

const handleSearch = () => {
    loadingBar(true);
    const searchField = document.getElementById('search_field');
    const searchText = searchField.value;
    searchField.value = '';
    loadData(searchText);
}

const loadingBar = (isLoading) => {
    const loadingBar = document.getElementById('loading_bar');
    if (isLoading) {
        loadingBar.classList.remove('hidden');
    } else {
        loadingBar.classList.add('hidden');
    }
}

const showDetails = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await response.json();
    console.log(data);
}