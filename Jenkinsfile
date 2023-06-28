pipeline {
  agent { label 'jenkins-agent-admin-services' }
  
  stages {
      stage('install playwright test') {
        steps {
          sh """
          npm install -D @playwright/test
          """
        }
      }

      stage('e2e-tests') {
        environment {
          // GIT_SHORT_COMMIT = "${GIT_COMMIT[0..7]}"
          TEST_URL = credentials('TEST_URL')
          // TEST_TOKEN = credentials('TEST_TOKEN')
          TEST_USERNAME = credentials('TEST_USERNAME')
          TEST_PASSWORD = credentials('TEST_PASSWORD')
        }
        steps {
          sh """
          npm ci
          npx playwright test
          """
        }
      }
  }

  post {
    always {
      archiveArtifacts("**/test-results/**/*.*")
    }
    failure {
      catchError {
          // sh '...'
      }
    }
  }
}
