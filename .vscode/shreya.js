function createFloatingHearts() {
            const container = document.querySelector(".heart123");
            for (let i = 0; i < 50; i++) {
                const heart = document.createElement('div');
                heart.className = 'hearts';
                heart.innerHTML = 'â¤';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDelay = Math.random() * 3 + 's';
                container.appendChild(heart);
            }
        };

        function showSurprise() {
            alert("Surprise! You've hacked into my heart ðŸ’˜");
            createFloatingHearts();
            document.querySelector('.secret-button').textContent = "ðŸ’– Mission Accomplished ðŸ’–";
        };

        // Initial hearts
        createFloatingHearts();

function rate(star) {
            if (star < 5) {
                document.getElementById("ratingMessage").innerText = "Dear! You are only allowed to rate 5 stars ðŸ˜‰";
            } else {
                document.getElementById("ratingMessage").innerText = "Uff ðŸ™ˆ 5 stars! You have a great taste ðŸ˜";
            };
        };

function checkMCQ(aaa) {
    if(aaa == "A"){
        document.getElementById("mcqMessage").innerText = "Dear! You are only allowed to rate 5 stars ðŸ˜‰";
            } 
    else if(aaa == "B"){
        document.getElementById("mcqMessage").innerText = "Dear! You are only allowed to rate 5 stars ðŸ˜‰";
            } 
    else if(aaa == "C"){
        document.getElementById("mcqMessage").innerText = "Dear! You are only allowed to rate 5 stars ðŸ˜‰";
            } 
    else if(aaa == "D"){
        document.getElementById("mcqMessage").innerText = "Dear! You are only allowed to rate 5 stars ðŸ˜‰";
            } 
    else{
        document.getElementById("mcqMessage").innerText = "Finally! à¤†à¤ªà¤•à¥€ à¤†à¤à¤–à¥‡à¤‚ perfect 6/6 vision à¤µà¤¾à¤²à¥€ à¤¨à¤¿à¤•à¤²à¥€à¤‚! ðŸ˜ŒðŸ˜†";
            };
};


