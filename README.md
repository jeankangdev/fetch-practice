## 😼 PROJECT

A cat album to practice fetching and rendering API data with vanilla JavaScript

---

## 📌 PLAN

#### STACK

- Node.js, HTML, CSS, Vanilla JavaScript(ES6)

#### FEATURE

- [x] fetch API data
- [ ] render sub-data when clicking directories / files
- [ ] update Breadcrumb on click
- [ ] render data on Breadcrumb click
- [ ] display back button in sub-directories
- [ ] display cat image with modal when clicking files
- [ ] close modal when clicking outside of the modal or ESC

#### OTHERS

- [ ] use Component  
       App and other components  
       each component is independent from each other
- [ ] API call  
       loose coupling  
       error check
      inform the user that the error occured  
       use async, or await for practice
- [ ] minimize global scope pollution
- [ ] minimize event binding
- [ ] use cash to render data that has been rendered already

#### STEP

- render the application to main.js that has class App
- index.html has 3 sections

#### markup:

1.  Breadcrumb: show current directory (root)

          <nav class="Breadcrumb">
            <div>root</div>
            <div>yellow cat</div>
          </nav>

2.  Nodes: render data for current directory

- node type: DIRECTORY

          <div class="Node">
            <img src="./assets/directory.png">
            <div>2021/04</div>
          </div>

- node type: FILE

          <div class="Node">
            <img src="./assets/file.png">
            <div>yawning cat</div>
          </div>

- display back-button if the current directory is not 'root'

          <div class="Node">
            <img src="./assets/prev.png">
          </div>

  3.  ImageView: render file image on modal when clicking files

            <div class="ImageViewer">
              <div class="content">
                <img src="">
              </div>
            </div>

---

## 💡 PROBLEM SOLVING HISTORY

- [ ] 2020/01/05 : Dashboard - Check in / Check out date not matching issue
