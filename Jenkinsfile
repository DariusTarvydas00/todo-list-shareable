pipeline {
    agent any
    triggers {
        pollSCM('*/15 * * * *')
    }
    tools {
    nodejs "Node"
    }

    stages {
        stage("Build project"){
            parallel {
                stage("Build Back-End"){
                dir('todo-list-shareable-backend')
                    when {
                        anyOf {
                        changeset "src/**"
                        }
                    }
                    steps {
                        sh 'npm install'
                    }
                }
                stage("Build Front-End"){
                dir('todo-list-shareable-frontend')
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