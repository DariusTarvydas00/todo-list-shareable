pipeline {
    agent any
    tools {
    nodejs "Node"
    }

    stages {
        stage("Build project"){
            parallel {
                stage("Build Back-End"){
                    when {
                        anyOf {
                        changeset "todo-list-shareable-backend/**"
                        }
                    }
                    steps {
                        sh 'npm install'
                    }
                }
                stage("Build Front-End"){
                    when {
                        anyOf {
                        changeset "src/**"
                        }
                    }
                    steps {
                        dir('todo-list-shareable-frontend')
                        sh 'npm install'
                    }
                }
            }
        }
    }
}