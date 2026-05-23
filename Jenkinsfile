pipeline{
    agent any

    stages {
        stage("Install Dependencies") {
            steps {
                bat 'npm install'
            }
        }
    }
    
    stages {
        stage("Run App") {
            steps {
                bat 'npm start'
            }
        }
    }
    
    stages {
        stage("Test App") {
            steps {
                bat 'npm test'
            }
        }
    }
    
    stages {
        stage("Build Docker Image") {
            steps {
                bat 'docker build -t node-jenkins-image ./'
            }
        }
    }
    
    stages {
        stage("Run Docker Container") {
            steps {
                bat 'docker run -d -p 3000:3000 --name node-jenkins-container  node-jenkins-image'
            }
        }
    }

}