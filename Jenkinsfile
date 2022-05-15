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
                        echo '-------------------------------111111111111111111111-------------------------'
                        sh 'npm install'
                        echo '-------------------------------2222222222222222221-------------------------'
                        sh 'pwd'
                        sh 'ls'

                        sh "npm run test"
                        echo '-------------------------------33333333333333333333333333333----------------------'
                        sh 'pwd'
                        sh 'ls'
                        echo '-------------------------------44444444444444444444444------------------'
                        dir('coverage') {
                            sh 'pwd'
                                                    sh 'ls'
                        }
                        }
                        dir('coverage') {
                        echo '------------------------------77777777777777777777777771111-------------------------'
                                                    sh 'pwd'
                                                                            sh 'ls'
                                                }
                    }
                    post{
                        success{
                        publishHTML target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: 'coverage',
                        reportFiles: 'cobertura-coverage.xml',
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
                        sh 'pwd'
                        sh 'ls'
                        sh "npm run coverage"
                        sh 'pwd'
                        sh 'ls'

                        }
                    }

                }
            }
         }
    }
}