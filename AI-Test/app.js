document.getElementById('app').innerHTML = '<button id="clickMe">Click me</button>';
document.getElementById('clickMe').onclick = () => {
    alert("Button clicked!");
};

async function analyzeText(text) {
    const response = await fetch('https://api-inference.huggingface.co/models/distilbert-base-uncased', {
        headers: { 'Authorization': 'Bearer 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' },
        method: 'POST',
        body: JSON.stringify({ inputs: text })
    });
    const result = await response.json();
    console.log(result);
}

document.getElementById('clickMe').onclick = () => {
    analyzeText("I love this project!");
};


