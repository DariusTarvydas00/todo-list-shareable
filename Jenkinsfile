pipeline {
    agent any
    tools {
    nodejs "Node"
    }

    stages {
        stage("Build project"){
            parallel {
                stage("Build Back-End"){
                    steps{
                        dir('todo-list-shareable-backend')
                    }
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
                    steps{
                        dir('todo-list-shareable-frontend')
                    }
                    when {
                        anyOf {
                        changeset "src/**"
                        }
                    }
                    steps {
                        sh 'npm install'
                    }
                }
            }
        }
    }
}