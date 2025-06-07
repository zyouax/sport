// Motivational quotes
const quotes = [
    "Chaque répétition te rapproche de ton objectif ! 💪",
    "La discipline bat la motivation. Continue !",
    "Ton futur toi te remerciera !",
    "Un pas à la fois, tu vas y arriver !",
    "La sueur d’aujourd’hui, les abdos de demain !",
    "Pousse plus fort, tu es plus fort !",
    "Pas d’excuses, juste des résultats !",
    "Transforme la douleur en puissance ! 🔥",
    "Chaque effort compte, ne lâche rien !",
    "Ton corps peut tout faire, c’est ton esprit qu’il faut convaincre !",
    "Sois plus fort que tes excuses !",
    "La victoire commence là où le confort s’arrête !",
    "Fais-le pour toi, pas pour les autres !",
    "Un jour de plus, un pas vers la grandeur !",
    "Repousse tes limites, elles sont faites pour ça !",
    "La constance transforme les rêves en réalité !",
    "Tu es plus proche de ton but qu’hier ! 🚀"
];

// Map of GIFs for exercises (add more as needed)
const exerciseGifs = {
    "Crunch jambes levées": "https://github.com/zyouax/sport/blob/main/gifs/jambes/tenor_crunches.gif",
    // Add other exercises here, e.g.:
    "Pompes mixtes": "https://github.com/zyouax/sport/blob/main/gifs/bras/tenor_pompe.gif",
    "Squat maintien": "https://via.placeholder.com/200",
    "Planche levée jambe": "https://via.placeholder.com/200",
    "Superman alterné": "https://via.placeholder.com/200",
    "Fentes sautées": "https://via.placeholder.com/200",
    "V-ups": "https://via.placeholder.com/200",
    "Planche tapotements": "https://via.placeholder.com/200"
};

// Map of instructions for exercises
const exerciseInstructions = {
    "Crunch jambes levées": "Allongé sur le dos, jambes levées à 90°, effectue des crunchs en relevant le buste vers les jambes. Expire en montant, inspire en descendant.",
    "Pompes mixtes": "Effectue 7 pompes normales, 7 diamant, 6 piquées. Garde le dos droit et descends lentement.",
    "Squat maintien": "Descends en squat, tiens 3 sec en bas, remonte lentement. Garde le dos droit.",
    "Planche levée jambe": "En position de planche, lève une jambe pendant 30 sec. Alterne les côtés.",
    "Superman alterné": "Allongé sur le ventre, lève bras droit et jambe gauche, puis alterne. Tiens 2 sec par côté.",
    "Fentes sautées": "Fais des fentes en sautant pour changer de jambe. Garde les genoux à 90°.",
    "V-ups": "Allongé, soulève jambes et torse en V. Redescends lentement sans toucher le sol.",
    "Planche tapotements": "En planche, touche l’épaule opposée avec une main, alterne 20 fois."
};

// Workout data
const workouts = {
    lundi: {
        name: "Lundi : Circuit Full-Body (Abdos + Pompes Normales)",
        tours: 3,
        exercises: [
            { name: "Crunch", duration: 30, reps: "20 rép" },
            { name: "Pompes normales", duration: 30, reps: "20 rép" },
            { name: "Squats", duration: 30, reps: "20 rép" },
            { name: "Planche", duration: 60, reps: "30-60 sec" },
            { name: "Superman", duration: 30, reps: "20 rép" },
            { name: "Fentes avant", duration: 30, reps: "20 rép/jambe" },
            { name: "Mountain climbers", duration: 30, reps: "30 sec" },
            { name: "Dips sur chaise", duration: 30, reps: "20 rép" },
        ],
        warmup: ["Jumping Jacks", "Rotations du tronc"],
        stretching: ["Étir abdos, dos, jambes"],
    },
    mardi: {
        name: "Mardi : Cardio",
        tours: 3,
        exercises: [
            { name: "Burpees", duration: 30, reps: "30 sec" },
            { name: "Jumping jacks", duration: 30, reps: "30 sec" },
            { name: "Course sur place", duration: 30, reps: "30 sec" },
            { name: "Shadow boxing", duration: 30, reps: "30 sec" },
            { name: "Mountain climbers", duration: 30, reps: "30 sec" },
        ],
        warmup: ["Montées de genoux", "Rotations des bras"],
        stretching: ["Jambes, dos"],
    },
    mercredi: {
        name: "Mercredi : Circuit Full-Body (Abdos + Pompes Diamant)",
        tours: 3,
        exercises: [
            { name: "Relevés de jambes", duration: 30, reps: "20 rép" },
            { name: "Pompes diamant", duration: 30, reps: "20 rép (ou 15)" },
            { name: "Squat sauté", duration: 30, reps: "20 rép" },
            { name: "Planche latérale", duration: 30, reps: "30 sec/côté" },
            { name: "Pont fessier", duration: 30, reps: "20 rép" },
            { name: "Fentes latérales", duration: 30, reps: "20 rép/côté" },
            { name: "Bicycle crunches", duration: 30, reps: "20 rép/côté" },
            { name: "Planche tapotements", duration: 30, reps: "20 tapotements" },
        ],
        warmup: ["Jumping Jacks", "Rotations du tronc"],
        stretching: ["Étir abdos, dos, jambes"],
    },
    jeudi: {
        name: "Jeudi : Repos Actif",
        tours: 1,
        exercises: [
            { name: "Étirements (Chat-vache, ischio-jambiers, cobra)", duration: 900, reps: "15-20 min" },
        ],
        warmup: [],
        stretching: [],
    },
    vendredi: {
        name: "Vendredi : Circuit Full-Body (Abdos + Pompes Piquées)",
        tours: 3,
        exercises: [
            { name: "Russian twists", duration: 30, reps: "20 rép/côté" },
            { name: "Pompes piquées", duration: 30, reps: "20 rép (ou 15)" },
            { name: "Squats sumo", duration: 30, reps: "20 rép" },
            { name: "Planche dynamique", duration: 30, reps: "20 transitions" },
            { name: "Superman maintien", duration: 30, reps: "20 rép" },
            { name: "Fentes arrière", duration: 30, reps: "20 rép/jambe" },
            { name: "Mountain climbers lents", duration: 30, reps: "30 sec" },
            { name: "Dips extension jambe", duration: 30, reps: "10 rép/jambe" },
        ],
        warmup: ["Montées de genoux", "Rotations des épaules"],
        stretching: ["Étir abdos, dos, jambes"],
    },
    samedi: {
        name: "Samedi : Circuit Full-Body (Mix Pompes + Abdos Intenses)",
        tours: 3,
        exercises: [
            { name: "Crunch jambes levées", duration: 30, reps: "20 rép" },
            { name: "Pompes mixtes", duration: 30, reps: "7 normales + 7 diamant + 6 piquées" },
            { name: "Squat maintien", duration: 30, reps: "20 rép" },
            { name: "Planche levée jambe", duration: 30, reps: "30 sec" },
            { name: "Superman alterné", duration: 30, reps: "20 rép/côté" },
            { name: "Fentes sautées", duration: 30, reps: "20 rép/jambe" },
            { name: "V-ups", duration: 30, reps: "20 rép" },
            { name: "Planche tapotements", duration: 30, reps: "20 tapotements" },
        ],
        warmup: ["Jumping Jacks", "Rotations du tronc"],
        stretching: ["Étir abdos, dos, jambes"],
    },
    dimanche: {
        name: "Dimanche : Repos Complet",
        tours: 1,
        exercises: [
            { name: "Repos complet", duration: 0, reps: "Repos" },
        ],
        warmup: [],
        stretching: [],
    },
};

// Display random quote (index.html)
if (document.getElementById('motivational-quote')) {
    displayQuote();
}

function displayQuote() {
    const quoteElement = document.getElementById('motivational-quote');
    quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

// Progress tracking
let daysCompleted = parseInt(localStorage.getItem('daysCompleted')) || 0;
let streak = parseInt(localStorage.getItem('streak')) || 0;
let completedDays = JSON.parse(localStorage.getItem('completedDays')) || {};
if (document.getElementById('days-completed')) {
    document.getElementById('days-completed').textContent = daysCompleted;
    document.getElementById('streak').textContent = streak;
    updateProgressBar();
    updateMilestoneMessage();
    generateCalendar();
}

// Update progress bar
function updateProgressBar() {
    const progress = (daysCompleted / 30) * 100;
    const progressElement = document.getElementById('progress');
    if (progressElement) {
        progressElement.style.width = `${progress}%`;
    }
}

// Milestone messages
function updateMilestoneMessage() {
    const progress = (daysCompleted / 30) * 100;
    const messageElement = document.getElementById('milestone-message');
    if (messageElement) {
        if (progress >= 100) {
            messageElement.textContent = 'Félicitations ! Défi de 30 jours complété ! 🎉';
        } else if (progress >= 75) {
            messageElement.textContent = 'Incroyable, tu es à 75% ! Continue !';
        } else if (progress >= 50) {
            messageElement.textContent = 'Moitié du chemin parcouru ! Tu es un champion !';
        } else if (progress >= 25) {
            messageElement.textContent = 'Super début, 25% atteint ! Reste focus !';
        } else {
            messageElement.textContent = 'Chaque jour compte, continue à te surpasser !';
        }
    }
}

// Confetti animation
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });
}

// Generate calendar (index.html)
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    if (calendar) {
        calendar.innerHTML = '';
        for (let i = 1; i <= 30; i++) {
            const day = document.createElement('div');
            day.textContent = i;
            if (i <= daysCompleted) {
                day.classList.add('completed');
            }
            calendar.appendChild(day);
        }
    }
}

// Workout page logic
if (document.getElementById('current-day-title')) {
    loadWorkout();
}

function loadWorkout() {
    const currentDay = getCurrentDay();
    const workout = workouts[currentDay];
    document.getElementById('current-day-title').textContent = workout.name;
    const content = document.getElementById('workout-content');
    
    let html = '';
    if (workout.warmup.length > 0) {
        html += '<h4>Échauffement (5 min)</h4><ul>';
        workout.warmup.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
    }
    
    if (workout.exercises[0].name !== "Repos complet") {
        html += `<h4>Circuit (${workout.tours} tours)</h4><div class="exercise-grid">`;
        workout.exercises.forEach(ex => {
            html += `<div class="exercise-card"><img src="https://via.placeholder.com/80" alt="${ex.name}"><strong>${ex.name}</strong> (${ex.reps})</div>`;
        });
        html += '</div>';
    } else {
        html += `<p>${workout.exercises[0].reps}</p>`;
    }
    
    if (workout.stretching.length > 0) {
        html += '<h4>Étirements (5 min)</h4><ul>';
        workout.stretching.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
    }
    
    content.innerHTML = html;
}

// Timer and workout logic
let timerInterval;
let currentDay, currentExerciseIndex = 0, currentTour = 1, isWorking = true;

function getCurrentDay() {
    const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    return days[new Date().getDay()];
}

function startTimer() {
    currentDay = getCurrentDay();
    if (!workouts[currentDay] || workouts[currentDay].exercises[0].name === "Repos complet") {
        alert("Aujourd'hui est un jour de repos ! Profite pour récupérer.");
        return;
    }

    currentExerciseIndex = 0;
    currentTour = 1;
    updateWorkoutDisplay();
    runTimer();
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = 30;
    document.getElementById('timer-phase').textContent = 'Prêt';
    document.getElementById('current-exercise').textContent = 'Clique sur Démarrer pour commencer !';
    document.getElementById('next-exercise').textContent = '';
    document.getElementById('tour-info').textContent = '';
}

function runTimer() {
    const workout = workouts[currentDay];
    const exercise = workout.exercises[currentExerciseIndex];
    let time = isWorking ? exercise.duration : 15;
    document.getElementById('timer').textContent = time;
    document.getElementById('timer-phase').textContent = isWorking ? 'Travail' : 'Repos';

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        time--;
        document.getElementById('timer').textContent = time;

        if (time <= 0) {
            if (isWorking) {
                isWorking = false;
                time = 15;
                document.getElementById('timer-phase').textContent = 'Repos';
                alert(`Repos 15 secondes ! Prochain : ${workout.exercises[currentExerciseIndex + 1]?.name || 'Tour suivant'}`);
            } else {
                currentExerciseIndex++;
                if (currentExerciseIndex >= workout.exercises.length) {
                    currentExerciseIndex = 0;
                    currentTour++;
                    if (currentTour > workout.tours) {
                        clearInterval(timerInterval);
                        document.getElementById('timer-phase').textContent = 'Terminé !';
                        document.getElementById('current-exercise').textContent = 'Séance terminée ! Bravo ! 🎉';
                        document.getElementById('next-exercise').textContent = '';
                        document.getElementById('exercise-gif').style.display = 'none';
                        document.getElementById('exercise-instructions').textContent = '';
                        document.getElementById('tour-info').textContent = '';
                        triggerConfetti();
                        daysCompleted++;
                        streak++;
                        completedDays[currentDay] = true;
                        localStorage.setItem('daysCompleted', daysCompleted);
                        localStorage.setItem('streak', streak);
                        localStorage.setItem('completedDays', JSON.stringify(completedDays));
                        return;
                    }
                }
                isWorking = true;
                time = workout.exercises[currentExerciseIndex].duration;
                document.getElementById('timer-phase').textContent = 'Travail';
                updateWorkoutDisplay();
            }
            document.getElementById('timer').textContent = time;
        }
    }, 1000);
}

function updateWorkoutDisplay() {
    const workout = workouts[currentDay];
    const exercise = workout.exercises[currentExerciseIndex];
    document.getElementById('current-exercise').textContent = `${exercise.name} (${exercise.reps})`;
    document.getElementById('next-exercise').textContent = currentExerciseIndex + 1 < workout.exercises.length
        ? `Suivant : ${workout.exercises[currentExerciseIndex + 1].name}`
        : `Tour ${currentTour + 1}/${workout.tours}`;
    document.getElementById('tour-info').textContent = `Tour ${currentTour}/${workout.tours}`;
    
    // Update GIF
    const gifElement = document.getElementById('exercise-gif');
    gifElement.src = exerciseGifs[exercise.name] || "https://via.placeholder.com/200";
    gifElement.style.display = 'block';
    
    // Update instructions
    document.getElementById('exercise-instructions').textContent = exerciseInstructions[exercise.name] || "Effectue l'exercice avec une bonne technique.";
}