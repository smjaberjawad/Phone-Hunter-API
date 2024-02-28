const handleSearch = () => {
    loadingBar(true);
    const searchField = document.getElementById('search_field');
    const searchText = searchField.value;
    searchField.value = '';
    loadData(searchText);
}

const loadData = async (searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const json = await response.json();
    const phones = json.data;
    displayPhones(phones);
}

const displayPhones = (phones) => {

    const showAllButton = document.getElementById('show_all_button');

    if (phones.length > 6) {
        showAllButton.classList.remove('hidden');
    } else {
        showAllButton.classList.add('hidden');
    }

    phones = phones.splice(0, 6);

    const phoneContainer = document.getElementById('phone_container');
    phoneContainer.innerText = '';

    phones.forEach(phone => {

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-base-100 shadow-xl border-2 border-gray-500 rounded-3xl m-auto`
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" />
        </figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard);

    });

    loadingBar(false);

}

const loadingBar = (isLoading) => {
    const loadingBar = document.getElementById('loading_bar');
    if (isLoading) {
        loadingBar.classList.remove('hidden');
    } else {
        loadingBar.classList.add('hidden');
    }
}