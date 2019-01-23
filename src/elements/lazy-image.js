
class lazyImage extends HTMLElement{
  constructor(){
    super();
    // Test shadow root
    this.attachShadow({mode: 'open'});
    this.handleClick = this.handleClick.bind(this);

    this.src = '';
    this.alt = 'lazy image';
  }
  connectedCallback(){
    this.src = this.getAttribute('src') || this.src;
    this.alt = this.getAttribute('alt') || this.alt;
    const img = document.createElement('img');
    img.setAttribute('src', this.src);

    if(this.shadowRoot){
      this.shadowRoot.appendChild(img);
    }
    
    this.addEventListener('click', this.handleClick)
  }

  handleClick(){
    const evt = new CustomEvent('cat', {
      detail: {
        id: 'XXX'
      }
    });
    this.dispatchEvent(evt);
  }
}


customElements.define('lazy-image', lazyImage);