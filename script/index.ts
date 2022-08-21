interface Quote {
  content: string;
  author: string;
}

const quoteElement: HTMLElement | null = document.querySelector('.quote');
const authorElement: HTMLElement | null = document.querySelector('.author');

async function fetchQuote(): Promise<Quote> {
  const request = await fetch('https://api.quotable.io/random');
  const response = await request.json();
  return response;
}

async function displayQuote(): Promise<void> {
  const quote = await fetchQuote();
  if (quoteElement) quoteElement.innerText = `"${quote.content}"`;
  if (authorElement) authorElement.innerText = quote.author;
}

displayQuote();
