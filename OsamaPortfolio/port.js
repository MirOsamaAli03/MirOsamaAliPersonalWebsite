document.getElementById('nextLink1').addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('home');
});

document.getElementById('nextLink2').addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('about');
});

document.getElementById('nextLink3').addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('certificates');
});

document.getElementById('nextLink4').addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('education');
});

document.getElementById('nextLink5').addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('projects');
});

document.getElementById('nextLink6').addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('Skills');
});

function loadContent(page) {
    const content = document.getElementById('content');

    switch(page) {
        case 'home':

            content.className = 'home';
            content.innerHTML = `
                <section class="first">
                    <div class="leftsec">
                        <div>
                            Hi, My Name is
                            <span class="nc"> Mir Osama Ali</span>
                        </div>
                        <div>
                            and I am a <span id="element"></span>
                        </div>
                    </div>
                    <div class="rightsec">
                        <img src="img/osi.jpg" alt="">
                    </div>
                </section>
            `;
            break;
        case 'about':
            content.className = 'about';
            content.innerHTML = `
                <section class="first">
                    <div class="h1">About Me </div>

                    <div class="h2"> I am a passionate and highly skilled intern specializing in Artificial Intelligence, with a strong focus on Machine
                    Learning, Deep Learning, and Data Analysis. My academic background and hands-on project experience have
                    provided me with a deep understanding of AI algorithms, neural networks, and advanced data techniques.
                    Driven by a fascination with AI's potential to transform industries, I am eager to apply my knowledge and skills in
                    a dynamic and innovative environment. My dedication to continuous learning and problem-solving positions me
                    as a valuable asset to any team looking to leverage AI for strategic advancements and impactful solutions.</div>
                </section>
            `;
            break;
        case 'certificates':
            content.className = 'certificates';
            content.innerHTML = `
                <section class="first">
                    <div class = "h1">Certificates</div>
                    <div class = "h2">
                    <ul class = "opa1 sktr">
                      <li>Supervised Machine Learning :
                      Regression and Classification<br><span>Coursera</span></li><br>
                      <li>Prepare, Clean , Transform and load data
                      using Power BI.<br><span>Coursera</span> </li>

                      </ul>

                    
                    
                    </div>
                </section>
            `;
            break;
        case 'education':
            content.className = 'education';
            content.innerHTML = `
            <section class="first">
            <div class = "h1">Education</div>
            <div class = "h2">
            <ul class = "opa1 sktr">
              <li><span>Goverment Dehli College , Karachi</span>
              H.S.C in Pre Engineering  2018-2021</li><br>
              <li><span>National University Of Computer 
              And Emerging Sciences</span>
               BCS Computer Science
               Sep 2021 - June 2025 </li>

              </ul>

            
            
            </div>
        </section>
            `;
            break;
        case 'projects':
            content.className = 'projects';
            content.innerHTML = `
            <section class="first">
           
            <div class="h1">Projects </div>
            <ul class = "u"><li>
            <div class="h2"> <span class = "s"> SONAR Rock vs Mine Prediction with Python</span><br>
            <span class = "s1">Description:</span> An end-to-end machine learning project focused on
            predicting whether sonar signals are reflected from rocks or mines.
            This project leverages logistic regression to classify the sonar signals
            effectively..</span>
            
            <ul>
            <li>
            Collected and preprocessed the sonar signal data using Pandas
 for data manipulation and NumPy for numerical  computations.
            
            
            </li>
            <li>
            Implemented logistic regression to develop a predictive model
            with 76% accuracy
            
            </li>
            <li>
            Evaluated the model's performance using appropriate metrics to
            ensure reliability and robustness.
            </li>
            </ul>
            
            </div>
            </li>
            <li>
            <div class="h2"> <span class = "s"> Face Mask Detection using Convolutional Neural
            Network (CNN)</span><br>
            <span class = "s1">Description:</span> A deep learning project focused on detecting face
            masks in images using Convolutional Neural Networks (CNN) to
            enhance public health safety.</span>
            
            <ul>
            <li>
            Preprocessed and augmented the image dataset using OpenCV
 for image manipulation and NumPy for numerical operations.
            
            </li>
            <li>
            Designed and trained a Convolutional Neural Network (CNN) to
            classify images into mask and no-mask categories with 80%
            accuracy.
            
            </li>
            <li>
            Utilized Matplotlib for visualizing data distributions, model
 accuracy, and loss over epochs to ensure transparency and
 model performance understanding. executives and guests.
            </li>
            </ul>
            
            </div>
            </li>
            </ul>

        </section>
            `;
            break;

            case 'Skills':

            content.className = 'Skills';
            content.innerHTML = `
            <section class="first">
                    <div class = "h1">Skills</div>
                    <div class = "h2">
                    <ul class = "opa1 sktr">
                      <li>Machine Learning</li>
                      <li>Python </li>
                      <li>C++ </li>
                      <li>C </li>
                      <li>Sql </li>
                      <li>Javascript </li>
                      <li>TensorFlow </li>
                      <li>Scikit </li>

                      </ul>

                    
                    
                    </div>
                </section>
            `;
            break;
    }

    if (page === 'home') {
        new Typed('#element', {
            strings: ['Student', 'AI Enthusiast', 'SWE Fellow', 'Web Developer'],
            typeSpeed: 50,
        });
    }
}
