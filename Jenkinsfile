pipeline {

    agent any
    triggers {pollSCM('*/15 * * * *')}
    tools {nodejs "Node"}

    stages {
        stage("Build project"){
            parallel {
            steps {
                dir('todo-list-shareable-backend'){
                sh 'npm install'
                }
                stage("Build Back-End"){
                    when {
                        anyOf {
                            changeset "src/**"
                        }
                    }
                }
                steps{
                    sh "nest build --configuration Release"
                    sh "docker-compose --env-file config/Test.env build api"
                }
            }
        }
        stage("Build Front-End"){

        }
    }
}