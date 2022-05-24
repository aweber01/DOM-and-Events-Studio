window.addEventListener("load", function() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = this.document.getElementById("landing");
    const abortButton = this.document.getElementById("missionAbort");
    const upButton = this.document.getElementById("up");
    const downButton = this.document.getElementById("down");
    const rightButton = this.document.getElementById("right");
    const leftButton = this.document.getElementById("left");
    const rocket = this.document.getElementById("rocket");
    let vertical = 0;
    let horizontal = 0;
    let height = this.document.getElementById("spaceShuttleHeight").innerHTML

    takeoffButton.addEventListener("click", event => {
        let takeoffConfirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(takeoffConfirm) {
            this.document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            this.document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            this.document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        };
    });
    
    landingButton.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        this.document.getElementById("shuttleBackground").style.backgroundColor = "green";
        this.document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        this.document.getElementById("spaceShuttleHeight").innerHTML = 0;    
    });    

    landingButton.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        this.document.getElementById("shuttleBackground").style.backgroundColor = "green";
        this.document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        this.document.getElementById("spaceShuttleHeight").innerHTML = 0;    
    });
    
    abortButton.addEventListener("click", event => {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");
        
        if(abortConfirm) {
            this.document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            this.document.getElementById("spaceShuttleHeight").innerHTML = 0;
            this.document.getElementById("shuttleBackground").style.backgroundColor = "green";
        }
    });

    upButton.addEventListener("click", event => {
        this.document.getElementById("spaceShuttleHeight").parseInt(innerHTML) += 10000;
        vertical += 10;
        rocket.style.bottom = `${vertical}px`;

    });

    downButton.addEventListener("click", event => {
        
        if(this.document.getElementById("spaceShuttleHeight").innerHTML > 0) {
            this.document.getElementById("spaceShuttleHeight").innerHTML -= 10000;
        }
        
        
    });
    
});