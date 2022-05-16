pipeline {
    agent any

    triggers{
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
                        changeset "todo-list-shareable-backend/**"
                        }
                    }
                    steps {
                        dir('todo-list-shareable-backend') {
                            sh 'docker build .'
                        }
                    }
                }
                stage("Build Front-End"){
                    when {
                        anyOf {
                        changeset "todo-list-shareable-frontend/**"
                        }
                    }
                    steps {
                        dir('todo-list-shareable-frontend') {
                            sh 'docker build .'
                        }
                    }
                }
            }
        }
        stage("Setup manual test env"){
                        steps{
                            dir('todo-list-shareable-backend') {
                                sh 'docker-compose --env-file environments/test-manual.env down'
                                sh 'docker-compose --env-file environments/test-manual.env up -d'
                            }
                        }
                        }
         stage("Unit test"){
            parallel{
                stage("Back-End Test"){
                    when {
                        anyOf {
                        changeset "todo-list-shareable-backend/**"
                        }
                    }
                    steps{
                        dir('todo-list-shareable-backend') {
                        sh 'npm run test'
                        }
                    }
                }
                stage("Front-End Test"){
                    when {
                        anyOf {
                        changeset "todo-list-shareable-frontend/**"
                        }
                    }
                    steps{
                        dir('todo-list-shareable-frontend') {
                        sh "npm run test:unit"
                        }
                    }
                }
            }
         }
    }
}