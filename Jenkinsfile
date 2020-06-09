pipeline {
	agent any
/*
	tools {
		maven '${env.MAVEN_HOME}'
		jdk '${env.JAVA_HOME}'
	}
*/
	parameters {
		choice (
			name: "NAVIGATEUR",
			choices: ["chrome", "firefox"],
			description: "Le navigateur sur lequel on veut lancer les tests"
		)
	}
	stages {
		stage ("Build and Test") {
			steps {
				bat "echo ********************This is the build stage********************"
				bat "gradle clean test -DnavigateurUtilise=${params.NAVIGATEUR}"
			}
		}
		stage ("Another Stage") {
			steps {
				bat "echo This is another stage"
			}
		}
	}
	post {
		always {
			cucumber jsonReportDirectory: "build/reports/tests/test/cucumber-reports", fileIncludePattern: "**/cucumberJsonReport.json"
		}

		unsuccessful {

			emailext body: '''Hi team,
							The latest tests build is unsuccessful.
							There may be errors or failures.
							Lahad.''',
					subject: 'Unsuccessful build ',
					to: 'testvalidationengineer123@gmail.com'

		}
	}
}