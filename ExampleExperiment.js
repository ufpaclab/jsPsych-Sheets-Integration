function ExampleExperiment(jsSheetHandle, jsPsychHandle, SONAHandle) {
    jsSheetHandle.CreateSession(RunExperiment)

    function RunExperiment(session) {
        // Define Constants
        const CONTACT_EMAIL = "fake@email.com"

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
            pages: [`Thanks for particpating! Please email us at ${CONTACT_EMAIL}.`],
            allow_keys: false
        }

        // Configure and Start Experiment
        jsPsychHandle.init({
            timeline: [WelcomeTrial, FinalTrial],
            on_trial_finish: session.insert,
            on_finish: SONAHandle.redirectToSONA
        })
    }
}