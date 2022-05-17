pipeline {
    agent any

    triggers{
        pollSCM('*/15 * * * *')
    }

    tools {
        nodejs "Node"
    }

    // continuous integration, testing, delivery Jenkinsfile - for continuous delivery; Jenkinsfile.prod - continuous deployment; last stresstest
    // another pipeline deploy to production: addition steps of testing, UI testing, performance testing
    // stress testing no waiting

    stages {
        stage("Build project"){
            parallel {
//                 stage("Build Back-End"){
//                     when {
//                         anyOf {
//                         changeset "todo-list-shareable-frontend/src/**"
//                         changeset "todo-list-shareable-frontend/test/**"
//                         }
//                     }
//                     steps {
//                         dir('todo-list-shareable-backend') {
//                             sh 'docker build -t backend . -t todo-list-shareable/nestjs-backend'
//                             sh 'docker-compose down'
//                             sh 'docker rm -fv $(docker ps -aq)'
//                             sh 'docker run -d --rm -p 3254:3000 todo-list-shareable/nestjs-backend'
//                         }
//                     }
//                 }
                stage("Build Front-End"){
//                     when {
//                         anyOf {
//                         changeset "todo-list-shareable-frontend/src/**"
//                         changeset "todo-list-shareable-frontend/tests/**"
//                         }
//                     }
                    steps {
                        dir('todo-list-shareable-frontend') {
                            sh 'docker build -t frontend . -t todo-list-shareable/vue-frontend'
                            sh 'docker-compose --env-file ../config/Test.env build web'
                            sh 'docker-compose down'
                            sh 'docker run -d --rm -p 8081:8081 todo-list-shareable/vue-frontend'
                        }
                    }
                }
            }
        }
//         stage("Setup manual test env"){
//                         steps{
//                             dir('todo-list-shareable-backend') {
//                                 sh 'docker-compose --env-file environments/test-manual.env up -d'
//                             }
//                         }
//                         }
//          stage("Unit test"){
//             parallel{
//                 stage("Back-End Test"){
//                     when {
//                         anyOf {
//                         changeset "todo-list-shareable-backend/**"
//                         }
//                     }
//                     steps{
//                         dir('todo-list-shareable-backend') {
//                         sh 'npm run test'
//                         }
//                     }
//                 }
//                 stage("Front-End Test"){
//                     when {
//                         anyOf {
//                         changeset "todo-list-shareable-frontend/**"
//                         }
//                     }
//                     steps{
//                         dir('todo-list-shareable-frontend') {
//                         sh "npm run test:unit"
//                         }
//                     }
//                 }
//             }
//          }
       }
}