/* Variables ideas de titulos*/

const form = document.querySelector('.form');
const promptInput = document.querySelector('#prompt');
const responseDiv = document.querySelector('#response');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', async () => {
	const prompt = promptInput.value;
    console.log(prompt)
	const response = await getResponse(prompt);
	responseDiv.innerHTML = response;
});



form.addEventListener('submit', async (e) => {

	e.preventDefault()
	const prompt = promptInput.value;
    console.log(prompt)
	const response = await getResponse(prompt);
	responseDiv.innerHTML = response;
});

async function getResponse(prompt) {
	const apiKey = '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'; // Replace with your API key
	const apiUrl = ' https://api.openai.com/v1/chat/completions ';

	const data = {
		messages: [{"role": "user", "content": `Redacta 5 títulos atractivos considerando como tema a ${prompt}. Considera palabras como herramientas, secretos, errores, tips,lo que no sabes`}],
		max_tokens: 500,
        model: "gpt-3.5-turbo",
		
	};

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${apiKey}`
		},
		body: JSON.stringify(data)
	});

	const json = await response.json();
	return json.choices[0].message.content;
}


/*Variables ideas de contenido */

