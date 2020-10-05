const SONA = {
    redirectToSONA: function() {
        let survey_code = new URLSearchParams(window.location.search).get("survey_code")
        window.top.location.href = `https://ufl.sona-systems.com/webstudy_credit.aspx?experiment_id=145&credit_token=9419af749b2c4e79b6a43900be9aec70&survey_code=${survey_code}`
    }
}