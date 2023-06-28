pipeline {

  agent {
    docker {
      image 'mcr.microsoft.com/playwright:v1.35.0-jammy'
      reuseNode true
    }
  }
  
  stages {
      stage('install playwright test') {
        steps {
          // sh '''
          sh 'npm install -D @playwright/test'
            //  npx playwright install --with-deps
          // '''
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
          sh 'npm ci' //processes package.json and package-lock.json
          sh 'npx playwright test'
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
