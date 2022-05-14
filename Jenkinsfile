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
                        sh 'ls'
                        sh "npm run test"
                        sh 'ls'
                        }
                    }
                    post{
                        always{
                        step([$class: 'CoberturaPublisher', coberturaReportFile: 'todo-list-shareable-backend/src/output/coverage/jest/cobertura-coverage.xml'])
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
                        sh 'pwd'
                        dir('todo-list-shareable-frontend') {
                        sh 'pwd'
                        sh 'ls'
                        sh 'npm install'
                        sh "npm run coverage"
                        dif('coverage'){
                        sh 'ls'
                        }
                        sh 'ls'
                        }
                    }
                    post{
                        always{
                        step([$class: 'CoberturaPublisher', coberturaReportFile: 'coverage/cobertura-coverage.xml'])
                        }
                    }
                }
            }
         }
    }
}