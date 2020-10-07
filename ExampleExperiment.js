function ExampleExperiment(jsSheetHandle, jsPsychHandle, survey_code) {
    jsSheetHandle.CreateSession(RunExperiment)

    function RunExperiment(session) {
        // Define Constants
        const CONTACT_EMAIL = 'fake@email.com'
        const SONA_URL = `https://ufl.sona-systems.com/webstudy_credit.aspx?experiment_id=145&credit_token=9419af749b2c4e79b6a43900be9aec70&survey_code=${survey_code}`

        // Define Experiment Trials
        let WelcomeTrial = {
            type: 'html-keyboard-response',
            stimulus:`
                <p>Welcome to the experiment.</p>
                <p>Press any key to begin.</p>
            `
        }

        let FinalTrial = {
            type: 'instructions',
            pages: [`Thanks for particpating! Please email us at ${CONTACT_EMAIL}.`]
        }

        // Configure and Start Experiment
        jsPsychHandle.init({
            timeline: [WelcomeTrial, FinalTrial],
            on_trial_finish: session.insert,
            on_finish: window.top.location.href = SONA_URL
        })
    }
}