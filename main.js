'use strict';

// Fetch the items from the JSON file
function loadItems() {
  return fetch('https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev')
  // return fetch('./data/data.json')
    .then((response) => response.json())
    .then((json) => json);
}

// Update the list with the given items
function displayItems(items) {
  const currentFolder = document.querySelector('.current__folder');
  if (currentFolder.innerText != 'root') {
    const itemList = document.querySelector('ul');
    itemList.innerHTML = items.map((item) => createHTMLString(item)).join('');
    // displayBackButton(); 
  }
  const itemList = document.querySelector('ul');
  itemList.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  let result;
  if(item.type === "DIRECTORY") {
    result = `<li class="album__content" data-key="id" data-id="${item.id}">
      <i class="far fa-folder-open"></i>
      <span class="description">${item.name}</span>
      <span style="visibility='hidden'" parent="${parent}"></span>
    </li>`;
  } else if (item.type === "FILE") {
    result = `<li class="album__content" data-key="id" data-id="${item.id}">
      <img src="${item.img}"></img>
      <span class="description">${item.name}</span>
      <span style="visibility='hidden'" filePath="${item.filePath}" parent="${parent}"></span>
    </li>`;
  }
  return result;
}

function setEventListeners(items) {
  let root = document.querySelector('.current__folder');
  let rootText = root.innerText;
  console.log(rootText);
  root.addEventListener('click', () => {
    rootText = 'root';
    displayItems(items);
  });

  const folders = document.querySelector('.album__contents ul');
  folders.addEventListener('click', (event) => {
    let target;
    if (event.target == null) {
      return;
    } 
    
    if (event.target.tagName != 'div') {
      target = event.target.parentNode;
    } else {
      target = event.target;
    }
    console.log(target);

    fetchMatchingItems(target)
      .then((items) => {
        updateCurrentFolder(event);
        // displayBackButton();
        displayItems(items);
        setEventListeners(items);
      })
      .catch(console.log);
  });
}

function fetchMatchingItems(target) {
  console.log(target);
  console.log(target.dataset.key);    // "id"
  console.log(target.dataset.id);  // "#id number"
  const id = target.dataset.id;

  // const id = event.target.data.value;
  return fetch(`https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/:${id}`)
    .then(response => response.json())
    .then(json => json);
}

function updateCurrentFolder(event) {
  const currentFolder = document.querySelector('.current__folder');
  const folderName = event.target.parentNode.innerText;
  currentFolder.innerHTML = `root - ${folderName}`;
}

function displayBackButton() {
  const list = document.querySelector('.album__contents ul');
  let backButton = document.createElement('li');
  backButton.classList.add('btn back');
  backButton.innerHTML = `<i class="fas fa-chevron-left"></i>`;

  list.insertBefore(backButton, list.firstChild);
  backButton.addEventListener('click', () => {
    window.history.back();
  });
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);