function ExampleExperiment(jsSheetHandle, jsPsychHandle) {
    jsSheetHandle.CreateSession(RunExperiment)

    function RunExperiment(sessionID) {
        // Define Constants
        const PI = 3.14

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
            pages: ['Thanks for particpating! Please email us at fake@email.com.'],
            allow_keys: false
        }

        // Configure and Start Experiment
        jsPsychHandle.init({
            timeline: [WelcomeTrial, FinalTrial],
            on_trial_finish: function(data) {
                jsSheetHandle.Insert(sessionID, Object.values(data))
            }
        })

        // Define Utility Functions
        function Add(a, b) {
            return a + b
        }
    }
}