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
        let keyLookup = {}
        let keyOrder = []
        jsPsychHandle.init({
            timeline: [WelcomeTrial, FinalTrial],
            on_trial_finish: CreateAdaptiveUpload()
        })
        
        // Define Utility Functions
        function CreateAdaptiveUpload() {
            let keyLookup = {}
            let keyOrder = []
            return function(data, callback) {
                for (key in Object.keys(data)) {
                    if (typeof keyLookup[key] === 'undefined') {
                        keyLookup[key] = true
                        keyOrder.push(key)
                    }
                }
                let paddedData = []
                for (key in keyOrder) {
                    if (typeof data[key] === 'undefined') {
                        paddedData.push('')
                    }
                    else {
                        paddedData.push(data[key])
                    }
                }
                callback(data)
            }
        }
    }
}