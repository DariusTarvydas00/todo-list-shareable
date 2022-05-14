pipeline {
    agent any
    tools {nodejs "Node"}
    stages {
        stage("Build"){
            steps {
            sh "pwd"
            dir('todo-list-shareable-backend'){
                sh "pwd"
                sh 'npm install'
                }
            }
        }
    }
}