const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //Header container div
  const header = document.createElement('div');
  header.classList.add('header');
  //date
  const headerDate = document.createElement('span');
  headerDate.classList.add('date');
  headerDate.textContent = date;
  header.appendChild(headerDate);
  //title
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = title;
  header.appendChild(headerTitle);
  //temp
  const headerTemp = document.createElement('span');
  headerTemp.classList.add('temp');
  headerTemp.textContent = temp;
  header.appendChild(headerTemp);
  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let today = new Date();
  let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
  document.querySelector(selector).appendChild(Header('Lambda Times',date,"69\xB0"));
}

export { Header, headerAppender }
