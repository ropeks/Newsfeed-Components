// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.getButtonLabel();
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.clickHandler();
  }

  getButtonLabel() {
    const noLabel = !this.expandButton.textContent;
    const labelIsHide = this.expandButton.textContent === 'hide';

    if (noLabel || labelIsHide) {
      this.expandButton.textContent = 'expand';
    } else {
      this.expandButton.textContent = 'hide';
    }
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
    this.getButtonLabel();
  }

  clickHandler() {
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach((article) => {
  new Article(article);
})