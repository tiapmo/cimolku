const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const answer = question.nextElementSibling;
  const arrow = question.querySelector('img');

  // Sembunyikan semua jawaban saat awal
  answer.style.display = 'none';

  question.addEventListener('click', () => {
    const isOpen = question.classList.contains('open');

    // Tutup semua pertanyaan
    questions.forEach((q) => {
      q.classList.remove('open');
      q.querySelector('img').style.transform = 'rotate(0deg)';
      const a = q.nextElementSibling;
      if (a) a.style.display = 'none';
    });

    // Jika belum terbuka, buka pertanyaan yang diklik
    if (!isOpen) {
      question.classList.add('open');
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(180deg)';
    }
  });
});
