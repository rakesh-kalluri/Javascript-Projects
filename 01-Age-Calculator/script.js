const btnElement = document.getElementById('btn');
const birthdayInput = document.getElementById('birthday');
const result = document.getElementById('result');

function calculateAge() {
  const birthdayValue = birthdayInput.value;
  if (birthdayValue === '') {
    alert('please provide birthday');
  } else {
    const age = getAge(birthdayValue);
    result.innerText = `Your Age is ${age} ${age > 1 ? 'years' : 'year'} old`;
  }
}

function getAge(birthdayInput) {
  const birthdayDate = new Date(birthdayInput);
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnElement.addEventListener('click', calculateAge);
