// function for getting result when a new game is added from the same ID
export const RefreshData= async () => {
    const getData = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ICAC56dlkUBF59kdhDKB/scores/').then((res) => res.json());
    return getData.result;
};

// function for generating a new game from the input through a game ID
export const NewScore = async () => {
    const user = document.getElementById('names');
    const score = document.getElementById('scoresTXT');
    //Error Handling
    if (score.value === '' || user.value === '') {
        alert('Feel in both Your Name and Your Score as Required');
    }

    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ICAC56dlkUBF59kdhDKB/scores/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        },

        body: JSON.stringify({
            user: user.value,
            score: score.value,
        }),
    });
    user.value = '';
    score.value = '';
};