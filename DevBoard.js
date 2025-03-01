  //Baground Color//

 function changeBackgroundColor() {
 const colors = ["#ff5733", "#33ff57", "#3357ff", "#f4ff33", "#ff33f4", "#33f4ff"];
     const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    }
     document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".color-wheel-icon").addEventListener("click", changeBackgroundColor);
    s});


    function changeBackgroundColor() {
        const colors = ["#ff5733", "#33ff57", "#3357ff", "#f4ff33", "#ff33f4", "#33f4ff"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }



 // Function to format the date as "Day, Month Day, Year"

function formatDate() {
    const currentDate = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}

document.getElementById('currentDate').textContent = formatDate();


  
    //Alert//

    document.addEventListener("DOMContentLoaded", function () {
        let completedButtons = document.querySelectorAll(".completed");
        let taskAssigned = document.querySelector(".task-count");
        let notificationNumber = document.querySelector(".notification-number");
        let activityLog = document.querySelector(".activity-log");
        let clearHistoryBtn = document.getElementById("clearHistoryBtn");
        
        completedButtons.forEach(button => {
            button.addEventListener("click", function () {
                alert("Board updated successfully!");
                
                // Decrease task count
                let taskCount = parseInt(taskAssigned.textContent);
                if (taskCount > 0) {
                    taskAssigned.textContent = taskCount - 1;
                }
                
                // Increase notification number
                let notifCount = parseInt(notificationNumber.textContent);
                notificationNumber.textContent = notifCount + 1;
                
                // Disable the button
                button.disabled = true;
                button.style.opacity = "0.5";
                button.textContent = "Completed";
                
                // Add activity log entry
                let logEntry = document.createElement("h3");
                let currentTime = new Date().toLocaleTimeString();
                logEntry.textContent = `You have completed the task ${this.parentElement.parentElement.querySelector("h3").textContent} - at ${new Date().toLocaleTimeString()}`;
                logEntry.classList.add("log-entry");
                activityLog.appendChild(logEntry);
                
                // Check if it's the last completed button clicked
                let allDisabled = Array.from(completedButtons).every(btn => btn.disabled);
                if (allDisabled) {
                    alert("Congrats!!! You have completed all the current task ");
                }
            });
        });
    
        // Clear history button functionality
        clearHistoryBtn.addEventListener("click", function () {
            let logEntries = document.querySelectorAll(".log-entry");
            logEntries.forEach(entry => entry.remove());
        });
    });
    

