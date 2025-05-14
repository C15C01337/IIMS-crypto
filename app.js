// SHA-256 hashing function
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

// Global variable for solved challenges
let solvedChallenges = [];

// Initialize the challenges display
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('challenges-container');
    
    // Initialize solved challenges from localStorage
    solvedChallenges = JSON.parse(localStorage.getItem('solvedChallenges')) || [];
    
    // Sort challenges by difficulty
    const difficultyOrder = { 'easy': 1, 'medium': 2, 'hard': 3 };
    const sortedChallenges = Object.entries(challenges).sort((a, b) => 
        difficultyOrder[a[1].difficulty] - difficultyOrder[b[1].difficulty]
    );

    // Create challenge cards
    sortedChallenges.forEach(([id, challenge]) => {
        const card = document.createElement('div');
        card.className = `col-md-6 col-lg-4 challenge-card ${solvedChallenges.includes(id) ? 'solved' : ''}`;
        card.onclick = () => openChallenge(id, challenge);
        
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">
                    ${challenge.title}
                    ${solvedChallenges.includes(id) ? '<span class="badge bg-success"><i class="bi bi-check-lg"></i></span>' : ''}
                </h5>
                <p class="card-text">${challenge.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="badge bg-${getDifficultyColor(challenge.difficulty)}">${challenge.difficulty}</span>
                    ${challenge.downloadFile ? `
                        <button class="btn btn-sm btn-outline-primary download-btn" onclick="event.stopPropagation(); downloadFile('${challenge.downloadFile}', '${challenge.fileType}')">
                            <i class="bi bi-download"></i> Download
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });

    // Add progress bar
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container mb-4';
    progressContainer.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-2">
            <h5 class="mb-0">Progress</h5>
            <span class="progress-text">${solvedChallenges.length}/${Object.keys(challenges).length} challenges solved</span>
        </div>
        <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: ${(solvedChallenges.length / Object.keys(challenges).length) * 100}%"></div>
        </div>
    `;
    container.parentElement.insertBefore(progressContainer, container);

    // Update progress bar
    updateProgress();
});

// Get color based on difficulty
function getDifficultyColor(difficulty) {
    switch(difficulty) {
        case 'easy': return 'success';
        case 'medium': return 'warning';
        case 'hard': return 'danger';
        default: return 'secondary';
    }
}

// Open challenge modal
function openChallenge(id, challenge) {
    const modal = new bootstrap.Modal(document.getElementById('challengeModal'));
    document.getElementById('challengeTitle').textContent = challenge.title;
    document.querySelector('.challenge-description').textContent = challenge.description;
    document.querySelector('.challenge-text').textContent = challenge.challenge;
    document.getElementById('flagInput').value = '';
    document.getElementById('alertMessage').style.display = 'none';
    
    // Store current challenge ID for verification
    document.getElementById('challengeModal').dataset.challengeId = id;
    
    modal.show();
}

// Verify flag
async function verifyFlag() {
    const challengeId = document.getElementById('challengeModal').dataset.challengeId;
    const challenge = challenges[challengeId];
    const submittedFlag = document.getElementById('flagInput').value;
    const alertMessage = document.getElementById('alertMessage');
    
    // Calculate hash of submitted flag
    const flagHash = await sha256(submittedFlag);
    
    if (flagHash === challenge.flagHash) {
        if (!solvedChallenges.includes(challengeId)) {
            solvedChallenges.push(challengeId);
            localStorage.setItem('solvedChallenges', JSON.stringify(solvedChallenges));
            updateProgress();
            
            // Update card appearance
            const card = document.querySelector(`.challenge-card[onclick*="${challengeId}"]`);
            if (card) {
                card.classList.add('solved');
                const title = card.querySelector('.card-title');
                title.innerHTML += '<span class="badge bg-success"><i class="bi bi-check-lg"></i></span>';
            }
        }
        
        alertMessage.className = 'alert alert-success mt-3';
        alertMessage.textContent = 'Correct flag! Challenge solved!';
        alertMessage.style.display = 'block';
        
        // Show completion message if all challenges are solved
        if (solvedChallenges.length === Object.keys(challenges).length) {
            setTimeout(() => {
                alert('Congratulations! You have solved all challenges!');
            }, 500);
        } else {
            setTimeout(() => {
                alert(`Challenge solved! ${Object.keys(challenges).length - solvedChallenges.length} challenges remaining.`);
            }, 500);
        }
    } else {
        alertMessage.className = 'alert alert-danger mt-3';
        alertMessage.textContent = 'Incorrect flag. Try again!';
        alertMessage.style.display = 'block';
    }
}

// Update progress bar
function updateProgress() {
    const progress = (solvedChallenges.length / Object.keys(challenges).length) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
    document.querySelector('.progress-text').textContent = 
        `${solvedChallenges.length}/${Object.keys(challenges).length} solved`;
}

function downloadFile(filePath, fileType) {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
} 