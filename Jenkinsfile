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
                        sh 'npm run test'
                        }
                        dir('../coverage'){
                        sh 'mv cobertura-coverage.xml be.xml'
                        }
                    }
                    post{
                        always {
                        step([$class: 'CoberturaPublisher', coberturaReportFile: 'reports/test-report-back-end.xml'])
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
                        }
                    }
                }
            }
         }
    }
}