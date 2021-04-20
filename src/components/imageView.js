const IMAGE_PATH_PREFIX = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*'

functoin imageView({ app, initialState }) {
  // image url
  this.state = initialState
  
  this.target = document.createElement('div')
  this.target.className = 'Modal ImageView'

  app.appendChild(this.target)

  this.setState(nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    this.target.innerHTML = `
      <div class="content">
        ${this.state? `<img src="${IMAGE_PATH_PREFIX}${this.state}">` : ''}
      </div>`

      this.target.style.display = this.state? 'block' : 'none'
  }

  this.render()
}