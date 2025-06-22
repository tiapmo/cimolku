const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  const answer = question.nextElementSibling;
  const arrow = question.querySelector('img');

  answer.style.display = 'none';

  question.addEventListener('click', () => {
    const isOpen = answer.style.display === 'block';

    document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none');
    document.querySelectorAll('.question img').forEach(img => img.style.transform = 'rotate(0deg)');
    document.querySelectorAll('.question').forEach(q => q.style.color = 'rgb(90, 90, 90)');

    if (!isOpen) {
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(180deg)';
      question.style.color = 'crimson';
    }
  });
});
