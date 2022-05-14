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
                    when {
                        anyOf {
                        changeset "src/**"
                        }
                    }
                    steps {
                        dir('todo-list-shareable-backend')
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