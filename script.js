

async function fetchData() {
    try {
        // Fetch the JSON data
        const response = await fetch('db.json');
        // Check if the response is OK (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Parse the JSON data
        const data = await response.json();
        // Display the data in the DOM
        displayData(data);
    } catch (error) {
        // Handle errors
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayData(dataArray) {
    // Initialize variables for each social media account
    let fbData = { fbusername: 'N/A', fbfollowers: 'N/A' };
    let instaData = { instausername: 'N/A', instafollowers: 'N/A' };
    let twitData = { twitusername: 'N/A', twitfollowers: 'N/A' };
    let gitData = { gitusername: 'N/A', gitfollowers: 'N/A' };
    let numData = { num5: 'N/A', num6: 'N/A', num7: 'N/A', num8: 'N/A', num9: 'N/A', num10: 'N/A', num11: 'N/A', num12: 'N/A'}; 
    let pData = { pfbviews: 'N/A', pfblikes: 'N/A', lgit: 'N/A', tvgit: 'N/A', linsta: 'N/A', pvinsta: 'N/A', rtwit: 'N/A', ltwit: 'N/A' };

    // Iterate through the array and extract the data
    dataArray.forEach(data => {
        if (data.fbusername) {
            fbData = data;
        }
        if (data.instausername) {
            instaData = data;
        }
        if (data.twitusername) {
            twitData = data;
        }
        if (data.gitusername) {
            gitData = data;
        }
        if (data.num5) {
            numData.num5 = data.num5;
        }
        if (data.num6) {
            numData.num6 = data.num6;
        }
        if (data.num7) {
            numData.num7 = data.num7;
        }
        if (data.num8) {
            numData.num8 = data.num8;
        }
        if (data.num9) {
            numData.num9 = data.num9;
        }
        if (data.num10) {
            numData.num10 = data.num10;
        }
        if (data.num11) {
            numData.num11 = data.num11;
        }
        if (data.num12) {
            numData.num12 = data.num12;
        }
        if (data.pfbviews) {
            pData.pfbviews = data.pfbviews;
        }
        if (data.pfblikes) {
            pData.pfblikes = data.pfblikes;
        }
        if (data.lgit) {
            pData.lgit = data.lgit;
        }
        if (data.tvgit) {
            pData.tvgit = data.tvgit;
        }
        if (data.linsta) {
            pData.linsta = data.linsta;
        }
        if (data.pvinsta) {
            pData.pvinsta= data.pvinsta;
        }
        if (data.rtwit) {
            pData.rtwit = data.rtwit;
        }
        if (data.ltwit) {
            pData.ltwit = data.ltwit;
        }
    });

    // Using nullish coalescing operator to avoid displaying 'undefined'
    document.querySelector('.fbusername').innerHTML = `@${fbData.fbusername ?? 'N/A'}`; 
    document.querySelector('.fbfollowers').innerHTML = `${fbData.fbfollowers ?? 'N/A'}`; 
    document.querySelector('.twitusername').innerHTML = `@${twitData.twitusername ?? 'N/A'}`; 
    document.querySelector('.twitfollowers').innerHTML = `${twitData.twitfollowers ?? 'N/A'}`; 
    document.querySelector('.instausername').innerHTML = `@${instaData.instausername ?? 'N/A'}`;
    document.querySelector('.instafollowers').innerHTML = `${instaData.instafollowers ?? 'N/A'}`;  
    document.querySelector('.gitusername').innerHTML = `@${gitData.gitusername ?? 'N/A'}`; 
    document.querySelector('.gitfollowers').innerHTML = `${gitData.gitfollowers ?? 'N/A'}`; 
    document.querySelector('.num5').innerHTML = `${numData.num5 ?? 'N/A'}`;
    document.querySelector('.num6').innerHTML = `${numData.num6 ?? 'N/A'}`;
    document.querySelector('.num7').innerHTML = `${numData.num7 ?? 'N/A'}`;
    document.querySelector('.num8').innerHTML = `${numData.num8 ?? 'N/A'}`;
    document.querySelector('.num9').innerHTML = `${numData.num9 ?? 'N/A'}`;
    document.querySelector('.num10').innerHTML = `${numData.num10 ?? 'N/A'}`;
    document.querySelector('.num11').innerHTML = `${numData.num11 ?? 'N/A'}`;
    document.querySelector('.num12').innerHTML = `${numData.num12 ?? 'N/A'}`;
    document.querySelector('.ltwit').innerHTML = `${pData.ltwit ?? 'N/A'}`;
    document.querySelector('.rtwit').innerHTML = `${pData.rtwit ?? 'N/A'}`;
    document.querySelector('.lgit').innerHTML = `${pData.lgit ?? 'N/A'}`;
    document.querySelector('.tvgit').innerHTML = `${pData.tvgit ?? 'N/A'}`;
    document.querySelector('.linsta').innerHTML = `${pData.linsta ?? 'N/A'}`;
    document.querySelector('.pvinsta').innerHTML = `${pData.pvinsta ?? 'N/A'}`;
    document.querySelector('.pfblikes').innerHTML = `${pData.pfblikes ?? 'N/A'}`;
    document.querySelector('.pfbviews').innerHTML = `${pData.pfbviews ?? 'N/A'}`;
} 
// Call the function to fetch data
fetchData();

document.addEventListener( "DOMContentLoaded",() => {
    const divs = document.querySelectorAll("#hover-effect");
    divs.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.classList.add("hover");
        });
        div.addEventListener("mouseleave", () => {
            div.classList.remove("hover");
        });
    });
});



