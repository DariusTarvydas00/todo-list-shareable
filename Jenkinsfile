pipeline {
    agent any
    tools {
    nodejs "Node"
    }

    stages {
        stage("Build project"){
            parallel {
                steps{
                dir('todo-list-shareable-backend')
                }
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
                steps{
                    dir('todo-list-shareable-frontend')
                }
                stage("Build Front-End"){
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