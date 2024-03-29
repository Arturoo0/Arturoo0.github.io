
function removeLoader(){
  loader = document.querySelector('#loader');
  loader.remove();
}

window.onload = () => {
  removeLoader();
  pageBody = `
    <div class="title animated fadeIn shadow">
      <h1 id="name">Arturo Portelles</h1>
      <div id="resumeContainer">
        <a id="resumebtn" href="resume/resume.pdf">
          View Resume
        </a>
      </div>
      <div id="titleButtons" class="fadeIn">
        <a href="https://www.linkedin.com/in/arturo-p-914059157/" id="linkedin" class="fab fa-linkedin fa-1x buttonAttributes"></a>
        <a href="https://github.com/Arturoo0" id="github" class="fab fa-github-square fa-1x buttonAttributes"></a>
      </div>
    </div>
    <div id="projectscontainer">
      <div id="projectheader" class="animated fadeIn">
        <h1 id="project-title">Projects</h1>
      </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="card shadow text-left  animated fadeIn">
              <img src="img/calculator.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Graphing Calculator</h5>
                <p class="card-text">A collaborative project built with the purpose of graphing a wide variety of functions. The application is able to graph and return an approximated bounded integral using Riemann sums.</p>
                <span class="badge badge-pill badge-info">Lua</span>
                <span class="badge badge-pill badge-info">Love2D</span>
                <br>
                <br>
                <a class="btn btn-secondary" href="https://github.com/Arturoo0/GraphingCalculator">
                  <i class="fas fa-code-branch"></i></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card shadow text-left animated fadeIn">
              <img src="img/webSort.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">WebSort</h5>
                <p class="card-text">Sorting visualizer allowing the user to select from a variety of different popular sorting algorithms. The user is also able to alter the number of elements and speed of the animation.</p>
                <span class="badge badge-pill badge-info">HTML</span>
                <span class="badge badge-pill badge-info">CSS</span>
                <span class="badge badge-pill badge-info">JavaScript</span>
                <br>
                <br>
                <a href="http://arturoportelles.me/WebSort/" class="btn btn-secondary"><i class="fas fa-eye"></i></a>
                <a href="https://github.com/Arturoo0/WebSort" class="btn btn-secondary"><i class="fas fa-code-branch"></i></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card shadow text-left  animated fadeIn">
              <img src="img/covidsync.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">CovidSync</h5>
                <p class="card-text">An application that integrates various APIs and services to provide crucial resources for the Spanish-speaking and bilingual communities about COVID-19. Won 2nd place at PantherHacks 2020.</p>
                <span class="badge badge-pill badge-info">Node.js</span>
                <span class="badge badge-pill badge-info">React</span>
                <span class="badge badge-pill badge-info">Express</span>
                <span class="badge badge-pill badge-info">HTML</span>
                <span class="badge badge-pill badge-info">CSS</span>
                <span class="badge badge-pill badge-info">JavaScript</span>
                <br>
                <br>
                <a href="https://github.com/FultonG/CovidSync" class="btn btn-secondary"><i class="fas fa-code-branch"></i></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card shadow text-left  animated fadeIn">
              <img src="img/weather.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Weather Tracker</h5>
                <p class="card-text">Allows users to enter specific locations for each weather tracker card. Current weather data and forecast data is pulled server side from the OpenWeatherMap's API's.</p>
                <span class="badge badge-pill badge-info">Node.js</span>
                <span class="badge badge-pill badge-info">JavaScript</span>
                <span class="badge badge-pill badge-info">Express</span>
                <span class="badge badge-pill badge-info">HTML</span>
                <span class="badge badge-pill badge-info">CSS</span>
                <br>
                <br>
                <a href="https://weather-tracker-js.herokuapp.com/" class="btn btn-secondary"><i class="fas fa-eye"></i></a>
                <a href="https://github.com/Arturoo0/Weather-tracker-" class="btn btn-secondary"><i class="fas fa-code-branch"></i></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card shadow text-left animated fadeIn">
              <img src="img/mazeAnim.gif" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Maze Generator and Pathfinding Visualizer</h5>
                <p class="card-text">The application generates random mazes of variable size using a Backtracking algorithm. It also animates the ‘flood filled’ path and the solution path using Breadth First Search on the open nodes of the maze grid.</p>
                <span class="badge badge-pill badge-info">Python</span>
                <span class="badge badge-pill badge-info">Pygame</span>
                <br>
                <br>
                <a href="https://github.com/Arturoo0/mazePy" class="btn btn-secondary"><i class="fas fa-code-branch"></i></i></a>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="container-fluid shadow" id="webBottom">
      <p>ARTURO PORTELLES</p>
      <div>
        <a href="https://www.linkedin.com/in/arturo-p-914059157/" class="footer-social-links fab fa-linkedin fa-1x buttonAttributes"></a>
        <a href="https://github.com/Arturoo0" class="footer-social-links fab fa-github-square fa-1x buttonAttributes"></a>
      </div>
    </div>
  `
  document.body.innerHTML += pageBody;
}
