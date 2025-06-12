pipeline {
    agent any

    environment {
        IMAGE_NAME = "myapp"
    }

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/your-user/your-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $IMAGE_NAME .'
                }
            }
        }

        stage('Deploy App') {
            steps {
                script {
                    sh 'docker-compose down || true'
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}
