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
                        changeset "todo-list-shareable-backend/src/**"
                        }
                    }
                    steps {
                        dir('todo-list-shareable-backend') {
                            sh 'npm run build'
                            sh 'npm test'
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
                            sh 'npm run build'
                        }
                    }
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
                        sh 'npm install'
                        sh "npm run test"
                            dir('coverage/back-end-coverage'){
                                sh 'mv cobertura-coverage.xml ../cobertura-coverage-backend.xml'
                            }
                        }
                    }
                    post{
                        success{
                        publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: 'coverage',
                        reportFiles: 'cobertura-coverage-backend.xml',
                        reportName: 'Back-End Report'
                        ]
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
                        sh 'npm install'
                        sh "npm run coverage"
                            dir('coverage/front-end-coverage'){
                            sh 'mv cobertura-coverage.xml ../cobertura-coverage-frontend.xml'
                            }
                        }
                    }
                    post{
                                                        success{
                                                        publishHTML target: [
                                                        allowMissing: false,
                                                        alwaysLinkToLastBuild: false,
                                                        keepAll: true,
                                                        reportDir: 'coverage',
                                                        reportFiles: 'cobertura-coverage-frontend.xml',
                                                        reportName: 'Front-End Report'
                                                        ]
                                                        }
                                                    }
                }
            }
         }
    }
}